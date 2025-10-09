"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Users,
  Shield,
  UserPlus,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  adminApi,
  User,
  Role,
  Employee,
  CreateUserRequest,
  UpdateUserRequest,
  Department,
} from "@/lib/admin-api-client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function AdminPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [positions, setPositions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [formData, setFormData] = useState<CreateUserRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roleId: 3, // Default to student
    employeeId: null,
  });

  // Employee creation states
  const [isCreatingEmployee, setIsCreatingEmployee] = useState(false);
  const [newEmployeePosition, setNewEmployeePosition] = useState("");
  const [newEmployeeDepartmentId, setNewEmployeeDepartmentId] = useState<
    number | null
  >(null);
  const [newDepartmentName, setNewDepartmentName] = useState("");

  // Fetch initial data
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterRole]);

  const fetchData = async () => {
    try {
      setIsFetching(true);
      setError(null);
      const [
        usersData,
        rolesData,
        employeesData,
        departmentsData,
        positionsData,
      ] = await Promise.all([
        adminApi.getUsers(filterRole === "all" ? undefined : filterRole),
        adminApi.getRoles(),
        adminApi.getEmployees(),
        adminApi.getDepartments(),
        adminApi.getPositions(),
      ]);
      setUsers(usersData);
      setRoles(rolesData);
      setEmployees(employeesData);
      setDepartments(departmentsData);
      setPositions(positionsData);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load data";
      setError(message);
      console.error("Failed to fetch data:", err);
    } finally {
      setIsFetching(false);
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      roleId: 3, // Default to student role
      employeeId: null,
    });
    setIsCreatingEmployee(false);
    setNewEmployeePosition("");
    setNewEmployeeDepartmentId(null);
    setNewDepartmentName("");
    setIsModalOpen(true);
  };

  const handleCreateEmployee = async () => {
    if (!newEmployeePosition.trim()) {
      alert("กรุณากรอกตำแหน่ง");
      return;
    }

    try {
      setIsLoading(true);

      // Create new department if needed
      let departmentId = newEmployeeDepartmentId;
      if (newDepartmentName.trim() && !departmentId) {
        const newDept = await adminApi.createDepartment(
          newDepartmentName.trim()
        );
        departmentId = newDept.departmentId;
        setDepartments([...departments, newDept]);
      }

      // Create new employee
      const newEmployee = await adminApi.createEmployee({
        position: newEmployeePosition.trim(),
        departmentId,
      });

      setEmployees([...employees, newEmployee]);
      setPositions([...new Set([...positions, newEmployeePosition.trim()])]);

      // Set the new employee as selected
      setFormData({ ...formData, employeeId: newEmployee.employeeId });
      setIsCreatingEmployee(false);
      setNewEmployeePosition("");
      setNewEmployeeDepartmentId(null);
      setNewDepartmentName("");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to create employee";
      alert(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: "", // Don't pre-fill password
      roleId: user.roleId,
      employeeId: user.employeeId || null,
    });
    setIsModalOpen(true);
  };

  const handleManagePermissions = () => {
    router.push(`/permission`);
  };

  const handleDeleteUser = async (userId: number) => {
    setDeleteUserId(userId);
  };

  const confirmDeleteUser = async () => {
    if (!deleteUserId) return;

    try {
      setIsLoading(true);
      await adminApi.deleteUser(deleteUserId);
      setUsers(users.filter((user) => user.userId !== deleteUserId));
      setDeleteUserId(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete user";
      alert(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (editingUser) {
        // Update existing user
        const updateData: UpdateUserRequest = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          roleId: formData.roleId,
          employeeId: formData.employeeId,
        };

        // Only include password if it was changed
        if (formData.password) {
          updateData.password = formData.password;
        }

        const updatedUser = await adminApi.updateUser(
          editingUser.userId,
          updateData
        );
        setUsers(
          users.map((user) =>
            user.userId === editingUser.userId ? updatedUser : user
          )
        );
      } else {
        // Add new user
        const newUser = await adminApi.createUser(formData);
        setUsers([newUser, ...users]);
      }

      setIsModalOpen(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save user";
      setError(message);
      alert(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "driver":
        return "bg-blue-100 text-blue-800";
      case "student":
        return "bg-green-100 text-green-800";
      case "teacher":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "admin":
        return "ผู้ดูแลระบบ";
      case "driver":
        return "คนขับรถ";
      case "student":
        return "นักศึกษา";
      case "teacher":
        return "ครู";
      default:
        return role;
    }
  };

  if (isFetching) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-red-600" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
          <button
            onClick={fetchData}
            className="mt-2 text-sm text-red-600 underline hover:no-underline"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-red-100 rounded-lg">
            <Users className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">จัดการผู้ใช้</h1>
            <p className="text-gray-600">ระบบจัดการข้อมูลผู้ใช้งาน</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="ค้นหาชื่อหรืออีเมล..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white transition-all"
          />
        </div>

        <select
          title="Filter by role"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white transition-all"
        >
          <option value="all">ทุกบทบาท</option>
          <option value="admin">ผู้ดูแลระบบ</option>
          <option value="student">นักศึกษา</option>
          <option value="driver">คนขับรถ</option>
        </select>

        <button
          onClick={handleAddUser}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 transition-all shadow-sm hover:shadow-md"
        >
          <Plus className="w-5 h-5" />
          เพิ่มผู้ใช้
        </button>

        <button
          onClick={() => handleManagePermissions()}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 active:bg-gray-900 transition-all shadow-sm hover:shadow-md"
          title="จัดการสิทธิ์"
        >
          <Shield className="w-4 h-4" />
          จัดการสิทธิ์
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-red-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  ชื่อ
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  อีเมล
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  บทบาท
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  วันที่สร้าง
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr
                  key={user.userId}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <div>
                      <div className="font-semibold">
                        {user.firstName} {user.lastName}
                      </div>
                      {user.employee && (
                        <div className="text-xs text-gray-500 mt-1">
                          {user.employee.position}
                          {user.employee.department &&
                            ` • ${user.employee.department}`}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(
                        user.role
                      )}`}
                    >
                      {getRoleDisplayName(user.role)}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(user.createdAt).toLocaleDateString("th-TH")}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="p-2 text-gray-700 hover:bg-gray-100 border border-gray-300 rounded-lg transition-all hover:border-gray-400"
                        title="แก้ไข"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteUser(user.userId)}
                        className="p-2 text-red-600 hover:bg-red-50 border border-red-200 rounded-lg transition-all hover:border-red-400"
                        title="ลบ"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12 bg-gray-50">
            <p className="text-gray-500">ไม่พบข้อมูลผู้ใช้</p>
          </div>
        )}
      </div>

      {/* User Form Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {editingUser ? (
                <>
                  <Edit className="w-5 h-5" />
                  แก้ไขผู้ใช้
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  เพิ่มผู้ใช้ใหม่
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {editingUser
                ? "อัปเดตข้อมูลผู้ใช้งานในระบบ"
                : "กรอกข้อมูลเพื่อสร้างผู้ใช้ใหม่"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">
                ชื่อ <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                required
                disabled={isLoading}
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder="กรุณากรอกชื่อ"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">
                นามสกุล <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                required
                disabled={isLoading}
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="กรุณากรอกนามสกุล"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                อีเมล <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                disabled={isLoading}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@mut.ac.th"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">
                รหัสผ่าน
                {!editingUser && <span className="text-red-500"> *</span>}
                {editingUser && (
                  <span className="text-sm text-gray-500 font-normal ml-2">
                    (ไม่ต้องกรอกหากไม่ต้องการเปลี่ยน)
                  </span>
                )}
              </Label>
              <Input
                id="password"
                type="password"
                required={!editingUser}
                disabled={isLoading}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder={
                  editingUser ? "ไม่ต้องกรอกหากไม่เปลี่ยน" : "กรุณากรอกรหัสผ่าน"
                }
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role">
                บทบาท <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.roleId.toString()}
                onValueChange={(value) =>
                  setFormData({ ...formData, roleId: Number(value) })
                }
                disabled={isLoading}
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="เลือกบทบาท" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem
                      key={role.roleId}
                      value={role.roleId.toString()}
                    >
                      {getRoleDisplayName(role.roleName)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Employee */}
            <div className="space-y-2">
              <Label htmlFor="employee">พนักงาน (ถ้ามี)</Label>

              {!isCreatingEmployee ? (
                <>
                  <Select
                    value={formData.employeeId?.toString() || "none"}
                    onValueChange={(value) => {
                      if (value === "create-new") {
                        setIsCreatingEmployee(true);
                      } else {
                        setFormData({
                          ...formData,
                          employeeId: value === "none" ? null : Number(value),
                        });
                      }
                    }}
                    disabled={isLoading}
                  >
                    <SelectTrigger id="employee">
                      <SelectValue placeholder="ไม่ใช่พนักงาน" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">ไม่ใช่พนักงาน</SelectItem>
                      <SelectItem value="create-new">
                        ➕ สร้างพนักงานใหม่
                      </SelectItem>
                      {employees.map((emp) => (
                        <SelectItem
                          key={emp.employeeId}
                          value={emp.employeeId.toString()}
                        >
                          {emp.position}
                          {emp.department && ` - ${emp.department}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">
                    เลือกพนักงานถ้าผู้ใช้เป็นพนักงานในระบบ (ครู, พนักงาน, ฯลฯ)
                  </p>
                </>
              ) : (
                <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50 space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-red-900">
                      สร้างพนักงานใหม่
                    </h4>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsCreatingEmployee(false);
                        setNewEmployeePosition("");
                        setNewEmployeeDepartmentId(null);
                        setNewDepartmentName("");
                      }}
                      disabled={isLoading}
                      className="hover:bg-red-100 text-red-900"
                    >
                      ยกเลิก
                    </Button>
                  </div>

                  {/* Position Input with Suggestions */}
                  <div className="space-y-2">
                    <Label htmlFor="newPosition" className="text-gray-900">
                      ตำแหน่ง <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="newPosition"
                      type="text"
                      required
                      disabled={isLoading}
                      value={newEmployeePosition}
                      onChange={(e) => setNewEmployeePosition(e.target.value)}
                      placeholder="เช่น อาจารย์, พนักงานขับรถ"
                      list="position-suggestions"
                      className="border-2 bg-white"
                    />
                    <datalist id="position-suggestions">
                      {positions.map((pos, idx) => (
                        <option key={idx} value={pos} />
                      ))}
                    </datalist>
                    <p className="text-xs text-gray-700">
                      พิมพ์ตำแหน่งใหม่หรือเลือกจากรายการที่มีอยู่
                    </p>
                  </div>

                  {/* Department Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="newDepartment" className="text-gray-900">
                      แผนก (ถ้ามี)
                    </Label>
                    <Select
                      value={newEmployeeDepartmentId?.toString() || "none"}
                      onValueChange={(value) => {
                        if (value === "create-new") {
                          setNewEmployeeDepartmentId(null);
                          // Focus will go to the input below
                        } else {
                          setNewEmployeeDepartmentId(
                            value === "none" ? null : Number(value)
                          );
                          setNewDepartmentName("");
                        }
                      }}
                      disabled={isLoading}
                    >
                      <SelectTrigger
                        id="newDepartment"
                        className="bg-white border-2"
                      >
                        <SelectValue placeholder="ไม่มีแผนก" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">ไม่มีแผนก</SelectItem>
                        <SelectItem value="create-new">
                          ➕ สร้างแผนกใหม่
                        </SelectItem>
                        {departments.map((dept) => (
                          <SelectItem
                            key={dept.departmentId}
                            value={dept.departmentId.toString()}
                          >
                            {dept.departmentName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* New Department Name Input */}
                  {newEmployeeDepartmentId === null && (
                    <div className="space-y-2">
                      <Label htmlFor="newDeptName" className="text-gray-900">
                        ชื่อแผนกใหม่
                      </Label>
                      <Input
                        id="newDeptName"
                        type="text"
                        disabled={isLoading}
                        value={newDepartmentName}
                        onChange={(e) => setNewDepartmentName(e.target.value)}
                        placeholder="กรอกชื่อแผนกใหม่ (ถ้าต้องการ)"
                        className="border-2 bg-white"
                      />
                    </div>
                  )}

                  <Button
                    type="button"
                    onClick={handleCreateEmployee}
                    disabled={isLoading || !newEmployeePosition.trim()}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        กำลังสร้าง...
                      </>
                    ) : (
                      "บันทึกพนักงาน"
                    )}
                  </Button>
                </div>
              )}
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                disabled={isLoading}
                className="border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
              >
                ยกเลิก
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    กำลังบันทึก...
                  </>
                ) : (
                  <>{editingUser ? "บันทึกการเปลี่ยนแปลง" : "เพิ่มผู้ใช้"}</>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={deleteUserId !== null}
        onOpenChange={(open) => !open && setDeleteUserId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ยืนยันการลบผู้ใช้</AlertDialogTitle>
            <AlertDialogDescription>
              คุณแน่ใจหรือไม่ที่จะลบผู้ใช้นี้?
              การดำเนินการนี้ไม่สามารถย้อนกลับได้
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading}>ยกเลิก</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDeleteUser}
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  กำลังลบ...
                </>
              ) : (
                "ลบผู้ใช้"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
