"use client";

import Loading from "@/components/loading/Loading";
import React, { Suspense, useState, useEffect, useCallback } from "react";
import {
  scheduleApi,
  type ScheduleData,
  formatScheduleTime,
  getStatusColor,
  getStatusLabel,
} from "@/lib/schedule-api-client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Eye, Filter } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ScheduleFormData {
  vehicleId: string;
  routeId: string;
  driverId: string;
  scheduleTime: string;
  status: "UPCOMING" | "CANCELLED" | "ONGOING" | "COMPLETED";
}

interface Vehicle {
  vehicleId: number;
  licensePlate: string;
  status: string;
}

interface Route {
  routeId: number;
  routeName: string;
}

interface Driver {
  userId: number;
  name: string;
  email: string;
}

function ScheduleManagementPageContent() {
  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleData | null>(
    null
  );
  const [formData, setFormData] = useState<ScheduleFormData>({
    vehicleId: "",
    routeId: "",
    driverId: "",
    scheduleTime: "",
    status: "UPCOMING",
  });
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loadingDropdowns, setLoadingDropdowns] = useState(false);

  const fetchSchedules = useCallback(async () => {
    try {
      setLoading(true);
      const filters: Record<string, string> = {};
      if (filterDate) filters.date = filterDate;
      if (filterStatus && filterStatus !== "ALL") filters.status = filterStatus;
      const data = await scheduleApi.getSchedules(filters);
      setSchedules(data);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to fetch schedules"
      );
    } finally {
      setLoading(false);
    }
  }, [filterDate, filterStatus]);

  const fetchDropdownData = useCallback(async () => {
    setLoadingDropdowns(true);
    try {
      const [vehiclesRes, routesRes, driversRes] = await Promise.all([
        fetch("/api/admin/vehicles", { credentials: "include" }),
        fetch("/api/admin/routes", { credentials: "include" }),
        fetch("/api/admin/users?role=driver", { credentials: "include" }),
      ]);

      if (vehiclesRes.ok) {
        const vehiclesData = await vehiclesRes.json();
        console.log("Vehicles response:", vehiclesData);
        // Handle both direct array and nested data structure
        const vehiclesList =
          vehiclesData.data?.vehicles || vehiclesData.vehicles || [];
        setVehicles(vehiclesList);
      } else {
        console.error("Failed to fetch vehicles:", vehiclesRes.status);
      }

      if (routesRes.ok) {
        const routesData = await routesRes.json();
        console.log("Routes response:", routesData);
        const routesList = routesData.data?.routes || routesData.routes || [];
        setRoutes(routesList);
      } else {
        console.error("Failed to fetch routes:", routesRes.status);
      }

      if (driversRes.ok) {
        const driversData = await driversRes.json();
        console.log("Drivers response:", driversData);
        const driversList = driversData.data?.users || driversData.users || [];
        setDrivers(driversList);
      } else {
        console.error("Failed to fetch drivers:", driversRes.status);
      }
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
      toast.error("Failed to load form data");
    } finally {
      setLoadingDropdowns(false);
    }
  }, []);

  useEffect(() => {
    fetchSchedules();
    fetchDropdownData(); // Fetch dropdown data on mount
  }, [fetchSchedules, fetchDropdownData]);

  const handleCreate = () => {
    setFormData({
      vehicleId: "",
      routeId: "",
      driverId: "",
      scheduleTime: "",
      status: "UPCOMING",
    });
    // Refresh dropdown data to ensure we have latest
    if (vehicles.length === 0 || routes.length === 0 || drivers.length === 0) {
      fetchDropdownData();
    }
    setIsCreateDialogOpen(true);
  };

  const handleEdit = (schedule: ScheduleData) => {
    setSelectedSchedule(schedule);
    setFormData({
      vehicleId: schedule.vehicle.vehicleId.toString(),
      routeId: schedule.route.routeId.toString(),
      driverId: schedule.driver.userId.toString(),
      scheduleTime: new Date(schedule.scheduleTime).toISOString().slice(0, 16),
      status: schedule.status,
    });
    // Refresh dropdown data to ensure we have latest
    if (vehicles.length === 0 || routes.length === 0 || drivers.length === 0) {
      fetchDropdownData();
    }
    setIsEditDialogOpen(true);
  };

  const handleDelete = (schedule: ScheduleData) => {
    setSelectedSchedule(schedule);
    setIsDeleteDialogOpen(true);
  };

  const handleView = async (schedule: ScheduleData) => {
    try {
      const fullSchedule = await scheduleApi.getSchedule(
        schedule.vehicleRouteScheduleId
      );
      setSelectedSchedule(fullSchedule);
      setIsViewDialogOpen(true);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to fetch schedule details"
      );
    }
  };

  const handleSubmitCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await scheduleApi.createSchedule({
        vehicleId: parseInt(formData.vehicleId),
        routeId: parseInt(formData.routeId),
        driverId: parseInt(formData.driverId),
        scheduleTime: new Date(formData.scheduleTime).toISOString(),
        status: formData.status,
      });
      toast.success("Schedule created successfully");
      setIsCreateDialogOpen(false);
      fetchSchedules();
    } catch (error) {
      console.error("Create schedule error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create schedule";

      // Check if it's a conflict error (409)
      if (errorMessage.includes("already has a schedule")) {
        toast.error(errorMessage, {
          description: "Please choose a different time, driver, or vehicle",
          duration: 5000,
        });
      } else {
        toast.error(errorMessage);
      }
    }
  };

  const handleSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSchedule) return;
    try {
      await scheduleApi.updateSchedule(
        selectedSchedule.vehicleRouteScheduleId,
        {
          vehicleId: parseInt(formData.vehicleId),
          routeId: parseInt(formData.routeId),
          driverId: parseInt(formData.driverId),
          scheduleTime: new Date(formData.scheduleTime).toISOString(),
          status: formData.status,
        }
      );
      toast.success("Schedule updated successfully");
      setIsEditDialogOpen(false);
      fetchSchedules();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update schedule";

      // Check if it's a conflict error (409)
      if (errorMessage.includes("already has a schedule")) {
        toast.error(errorMessage, {
          description: "Please choose a different time, driver, or vehicle",
          duration: 5000,
        });
      } else {
        toast.error(errorMessage);
      }
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedSchedule) return;
    try {
      await scheduleApi.deleteSchedule(selectedSchedule.vehicleRouteScheduleId);
      toast.success("Schedule deleted successfully");
      setIsDeleteDialogOpen(false);
      fetchSchedules();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete schedule";

      // Check if it's a booking conflict
      if (errorMessage.includes("booking")) {
        toast.error(errorMessage, {
          description: "Cannot delete schedule with active bookings",
          duration: 5000,
        });
      } else {
        toast.error(errorMessage);
      }
    }
  };

  if (loading) {
    return <Loading title="Loading schedules..." />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Schedule Management</h1>
          <p className="text-gray-600 mt-1">Manage vehicle route schedules</p>
        </div>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" />
          Create Schedule
        </Button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="filterDate">Date</Label>
              <Input
                id="filterDate"
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="filterStatus">Status</Label>
              <Select
                value={filterStatus || undefined}
                onValueChange={setFilterStatus}
              >
                <SelectTrigger id="filterStatus">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All statuses</SelectItem>
                  <SelectItem value="UPCOMING">กำลังจะเริ่ม</SelectItem>
                  <SelectItem value="ONGOING">กำลังดำเนินการ</SelectItem>
                  <SelectItem value="COMPLETED">เสร็จสิ้น</SelectItem>
                  <SelectItem value="CANCELLED">ยกเลิก</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setFilterDate("");
              setFilterStatus("ALL");
            }}
          >
            Clear
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableCaption>
            {schedules.length === 0
              ? "No schedules found"
              : `Total ${schedules.length} schedule(s)`}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow key={schedule.vehicleRouteScheduleId}>
                <TableCell className="font-medium">
                  {schedule.vehicleRouteScheduleId}
                </TableCell>
                <TableCell>
                  {formatScheduleTime(schedule.scheduleTime)}
                </TableCell>
                <TableCell>{schedule.route.routeName}</TableCell>
                <TableCell>
                  <div>
                    <div>{schedule.driver.name}</div>
                    <div className="text-xs text-gray-500">
                      {schedule.driver.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div>{schedule.vehicle.licensePlate}</div>
                    <div className="text-xs text-gray-500">
                      {schedule.vehicle.type}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      getStatusColor(schedule.status) as
                        | "default"
                        | "destructive"
                        | "outline"
                        | "secondary"
                    }
                  >
                    {getStatusLabel(schedule.status)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {schedule.bookingCount || 0} / {schedule.vehicle.capacity}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleView(schedule)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(schedule)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(schedule)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Create Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Schedule</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new vehicle route schedule.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitCreate} className="space-y-4">
            {loadingDropdowns && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-800 text-sm">Loading form data...</p>
              </div>
            )}

            {/* Conflict Warning */}
            {formData.vehicleId &&
              formData.driverId &&
              formData.scheduleTime && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-amber-800 text-sm font-medium">
                    ⚠️ Scheduling Conflict Check
                  </p>
                  <p className="text-amber-700 text-xs mt-1">
                    The API checks for conflicts within 30 minutes before/after
                    this time (+ route duration). If you see a 409 error, the
                    selected driver or vehicle already has a schedule during
                    this period.
                  </p>
                </div>
              )}

            <div>
              <Label htmlFor="createVehicle">Vehicle</Label>
              <Select
                value={formData.vehicleId}
                onValueChange={(value) =>
                  setFormData({ ...formData, vehicleId: value })
                }
                required
                disabled={loadingDropdowns}
              >
                <SelectTrigger id="createVehicle">
                  <SelectValue
                    placeholder={
                      loadingDropdowns ? "Loading..." : "Select vehicle"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.length === 0 ? (
                    <SelectItem value="no-data" disabled>
                      No vehicles available
                    </SelectItem>
                  ) : (
                    vehicles.map((v) => (
                      <SelectItem
                        key={v.vehicleId}
                        value={v.vehicleId.toString()}
                        disabled={v.status !== "ACTIVE"}
                      >
                        {v.licensePlate} ({v.status})
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="createRoute">Route</Label>
              <Select
                value={formData.routeId}
                onValueChange={(value) =>
                  setFormData({ ...formData, routeId: value })
                }
                required
                disabled={loadingDropdowns}
              >
                <SelectTrigger id="createRoute">
                  <SelectValue
                    placeholder={
                      loadingDropdowns ? "Loading..." : "Select route"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {routes.length === 0 ? (
                    <SelectItem value="no-data" disabled>
                      No routes available
                    </SelectItem>
                  ) : (
                    routes.map((r) => (
                      <SelectItem key={r.routeId} value={r.routeId.toString()}>
                        {r.routeName}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="createDriver">Driver</Label>
              <Select
                value={formData.driverId}
                onValueChange={(value) =>
                  setFormData({ ...formData, driverId: value })
                }
                required
                disabled={loadingDropdowns}
              >
                <SelectTrigger id="createDriver">
                  <SelectValue
                    placeholder={
                      loadingDropdowns ? "Loading..." : "Select driver"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {drivers.length === 0 ? (
                    <SelectItem value="no-data" disabled>
                      No drivers available
                    </SelectItem>
                  ) : (
                    drivers.map((d) => (
                      <SelectItem key={d.userId} value={d.userId.toString()}>
                        {d.name} ({d.email})
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="createTime">Schedule Time</Label>
              <Input
                id="createTime"
                type="datetime-local"
                value={formData.scheduleTime}
                onChange={(e) =>
                  setFormData({ ...formData, scheduleTime: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="createStatus">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    status: value as
                      | "UPCOMING"
                      | "CANCELLED"
                      | "ONGOING"
                      | "COMPLETED",
                  })
                }
                required
              >
                <SelectTrigger id="createStatus">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UPCOMING">กำลังจะเริ่ม</SelectItem>
                  <SelectItem value="ONGOING">กำลังดำเนินการ</SelectItem>
                  <SelectItem value="COMPLETED">เสร็จสิ้น</SelectItem>
                  <SelectItem value="CANCELLED">ยกเลิก</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Create Schedule</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Schedule</DialogTitle>
            <DialogDescription>
              Update the schedule information.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitEdit} className="space-y-4">
            <div>
              <Label htmlFor="editVehicle">Vehicle</Label>
              <Select
                value={formData.vehicleId}
                onValueChange={(value) =>
                  setFormData({ ...formData, vehicleId: value })
                }
                required
              >
                <SelectTrigger id="editVehicle">
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map((v) => (
                    <SelectItem
                      key={v.vehicleId}
                      value={v.vehicleId.toString()}
                      disabled={v.status !== "ACTIVE"}
                    >
                      {v.licensePlate} ({v.status})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="editRoute">Route</Label>
              <Select
                value={formData.routeId}
                onValueChange={(value) =>
                  setFormData({ ...formData, routeId: value })
                }
                required
              >
                <SelectTrigger id="editRoute">
                  <SelectValue placeholder="Select route" />
                </SelectTrigger>
                <SelectContent>
                  {routes.map((r) => (
                    <SelectItem key={r.routeId} value={r.routeId.toString()}>
                      {r.routeName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="editDriver">Driver</Label>
              <Select
                value={formData.driverId}
                onValueChange={(value) =>
                  setFormData({ ...formData, driverId: value })
                }
                required
              >
                <SelectTrigger id="editDriver">
                  <SelectValue placeholder="Select driver" />
                </SelectTrigger>
                <SelectContent>
                  {drivers.map((d) => (
                    <SelectItem key={d.userId} value={d.userId.toString()}>
                      {d.name} ({d.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="editTime">Schedule Time</Label>
              <Input
                id="editTime"
                type="datetime-local"
                value={formData.scheduleTime}
                onChange={(e) =>
                  setFormData({ ...formData, scheduleTime: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="editStatus">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    status: value as
                      | "UPCOMING"
                      | "CANCELLED"
                      | "ONGOING"
                      | "COMPLETED",
                  })
                }
                required
              >
                <SelectTrigger id="editStatus">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UPCOMING">กำลังจะเริ่ม</SelectItem>
                  <SelectItem value="ONGOING">กำลังดำเนินการ</SelectItem>
                  <SelectItem value="COMPLETED">เสร็จสิ้น</SelectItem>
                  <SelectItem value="CANCELLED">ยกเลิก</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Update Schedule</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Schedule</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this schedule?
            </DialogDescription>
          </DialogHeader>
          {selectedSchedule && (
            <div className="space-y-2">
              <p>
                <strong>Route:</strong> {selectedSchedule.route.routeName}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {formatScheduleTime(selectedSchedule.scheduleTime)}
              </p>
              <p>
                <strong>Driver:</strong> {selectedSchedule.driver.name}
              </p>
              <p>
                <strong>Vehicle:</strong>{" "}
                {selectedSchedule.vehicle.licensePlate}
              </p>
              {(selectedSchedule.bookingCount ?? 0) > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
                  <p className="text-yellow-800 text-sm">
                    <strong>Warning:</strong> This schedule has{" "}
                    {selectedSchedule.bookingCount} active booking(s). Deletion
                    may fail.
                  </p>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Schedule Details</DialogTitle>
          </DialogHeader>
          {selectedSchedule && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Schedule ID</Label>
                  <p className="font-medium">
                    {selectedSchedule.vehicleRouteScheduleId}
                  </p>
                </div>
                <div>
                  <Label>Status</Label>
                  <Badge
                    variant={
                      getStatusColor(selectedSchedule.status) as
                        | "default"
                        | "destructive"
                        | "outline"
                        | "secondary"
                    }
                  >
                    {getStatusLabel(selectedSchedule.status)}
                  </Badge>
                </div>
                <div>
                  <Label>Schedule Time</Label>
                  <p>{formatScheduleTime(selectedSchedule.scheduleTime)}</p>
                </div>
                <div>
                  <Label>Route</Label>
                  <p>{selectedSchedule.route.routeName}</p>
                </div>
                <div>
                  <Label>Driver</Label>
                  <div>
                    <p>{selectedSchedule.driver.name}</p>
                    <p className="text-xs text-gray-500">
                      {selectedSchedule.driver.email}
                    </p>
                  </div>
                </div>
                <div>
                  <Label>Vehicle</Label>
                  <div>
                    <p>{selectedSchedule.vehicle.licensePlate}</p>
                    <p className="text-xs text-gray-500">
                      {selectedSchedule.vehicle.type}
                    </p>
                  </div>
                </div>
                <div>
                  <Label>Capacity</Label>
                  <p>
                    {selectedSchedule.bookingCount || 0} /{" "}
                    {selectedSchedule.vehicle.capacity}
                  </p>
                </div>
              </div>
              {selectedSchedule.bookings &&
                selectedSchedule.bookings.length > 0 && (
                  <div>
                    <Label className="mb-2 block">
                      Bookings ({selectedSchedule.bookings.length})
                    </Label>
                    <div className="border rounded-lg divide-y max-h-60 overflow-y-auto">
                      {selectedSchedule.bookings.map((booking) => (
                        <div
                          key={booking.bookingId}
                          className="p-3 flex justify-between items-center"
                        >
                          <div>
                            <p className="font-medium">
                              {booking.user?.name || "Unknown"}
                            </p>
                            <p className="text-xs text-gray-500">
                              {booking.user?.email || "N/A"}
                            </p>
                          </div>
                          <Badge
                            variant={
                              booking.status === "CONFIRMED"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
          <DialogFooter>
            <Button type="button" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading title="Loading schedules..." />}>
      <ScheduleManagementPageContent />
    </Suspense>
  );
}
