// src/app/driver/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Play, CheckCircle, RefreshCw, AlertCircle, Eye, X } from "lucide-react";

interface DriverSchedule {
  id: string;
  routeName: string;
  departureTime: string;
  arrivalTime: string;
  startLocation: string;
  endLocation: string;
  passengerCount: number;
  maxPassengers: number;
  status: "pending" | "in-progress" | "completed";
  date: string;
  vehicleInfo?: {
    licensePlate: string;
    vehicleType: string;
    capacity: number;
  };
  routeDetails?: {
    overallTravelTime: number;
    stops: Array<{
      stopName: string;
      stopOrder: number;
      travelTime: number;
      lat: number;
      lng: number;
    }>;
  };
  passengers?: Array<{
    bookingId: number;
    passengerName: string;
    originStop: string;
    destinationStop: string;
    status: string;
  }>;
}

interface ApiResponse {
  schedules: DriverSchedule[];
  date: string;
  driverInfo: {
    driverId: number;
    driverName: string;
    email: string;
  };
}

// Passenger Modal Component
interface PassengerModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: DriverSchedule | null;
}

function PassengerModal({ isOpen, onClose, schedule }: PassengerModalProps) {
  if (!isOpen || !schedule) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">รายชื่อผู้โดยสาร</h2>
            <p className="text-sm text-gray-600 mt-1">
              {schedule.routeName} • {schedule.departureTime} - {schedule.arrivalTime}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Summary */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">รถ:</span>
                <span className="ml-2 font-medium">{schedule.vehicleInfo?.licensePlate}</span>
              </div>
              <div>
                <span className="text-gray-600">ความจุ:</span>
                <span className="ml-2 font-medium">{schedule.passengerCount}/{schedule.maxPassengers} คน</span>
              </div>
              <div>
                <span className="text-gray-600">ประเภทรถ:</span>
                <span className="ml-2 font-medium">{schedule.vehicleInfo?.vehicleType}</span>
              </div>
              <div>
                <span className="text-gray-600">สถานะ:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  schedule.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  schedule.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {schedule.status === 'pending' ? 'รอเริ่มงาน' :
                   schedule.status === 'in-progress' ? 'กำลังขับ' : 'เสร็จสิ้น'}
                </span>
              </div>
            </div>
          </div>

          {/* Passenger List */}
          {schedule.passengers && schedule.passengers.length > 0 ? (
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 mb-4">
                รายชื่อผู้โดยสาร ({schedule.passengers.length} คน)
              </h3>
              
              {schedule.passengers.map((passenger, index) => (
                <div key={passenger.bookingId} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          #{index + 1}
                        </span>
                        <h4 className="font-medium text-gray-900">{passenger.passengerName}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          passenger.status === 'BOOKED' ? 'bg-green-100 text-green-800' :
                          passenger.status === 'COMPLETED' ? 'bg-gray-100 text-gray-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {passenger.status === 'BOOKED' ? 'จองแล้ว' :
                           passenger.status === 'COMPLETED' ? 'เสร็จสิ้น' : 'ยกเลิก'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span>ขึ้น: {passenger.originStop}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-600" />
                          <span>ลง: {passenger.destinationStop}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่มีผู้โดยสาร</h3>
              <p className="text-gray-600">ยังไม่มีใครจองรอบรถนี้</p>
            </div>
          )}

          {/* Route Details */}
          {schedule.routeDetails && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">รายละเอียดเส้นทาง</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">เวลาเดินทางรวม:</span> {schedule.routeDetails.overallTravelTime} นาที
                </div>
                
                <div className="space-y-2">
                  {schedule.routeDetails.stops.map((stop, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium">
                        {stop.stopOrder}
                      </div>
                      <span className="flex-1">{stop.stopName}</span>
                      {stop.travelTime > 0 && (
                        <span className="text-gray-500">{stop.travelTime} นาที</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DriverPage() {
  const [schedules, setSchedules] = useState<DriverSchedule[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [driverInfo, setDriverInfo] = useState<ApiResponse['driverInfo'] | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<DriverSchedule | null>(null);
  const [isPassengerModalOpen, setIsPassengerModalOpen] = useState(false);

  // Fetch schedules from API
  const fetchSchedules = async (date: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/secure/driver/schedules?date=${date}`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      setSchedules(data.schedules);
      setDriverInfo(data.driverInfo);
    } catch (err) {
      console.error('Error fetching schedules:', err);
      setError('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  // Update schedule status
  const updateScheduleStatus = async (scheduleId: string, newStatus: string) => {
    try {
      const response = await fetch('/api/secure/driver/schedules', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          scheduleId: parseInt(scheduleId),
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Update local state
      setSchedules(prev => 
        prev.map(schedule => 
          schedule.id === scheduleId 
            ? { 
                ...schedule, 
                status: newStatus === 'ONGOING' ? 'in-progress' : 
                       newStatus === 'COMPLETED' ? 'completed' : 
                       newStatus === 'UPCOMING' ? 'pending' : schedule.status
              }
            : schedule
        )
      );
    } catch (err) {
      console.error('Error updating schedule:', err);
      alert('ไม่สามารถอัพเดทสถานะได้ กรุณาลองใหม่อีกครั้ง');
    }
  };

  const handleStartWork = (scheduleId: string) => {
    updateScheduleStatus(scheduleId, 'ONGOING');
  };

  const handleCompleteWork = (scheduleId: string) => {
    updateScheduleStatus(scheduleId, 'COMPLETED');
  };

  const handleViewPassengers = (schedule: DriverSchedule) => {
    setSelectedSchedule(schedule);
    setIsPassengerModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "in-progress": return "bg-blue-100 text-blue-800 border-blue-200";
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending": return "รอเริ่มงาน";
      case "in-progress": return "กำลังขับ";
      case "completed": return "เสร็จสิ้น";
      default: return "ไม่ทราบสถานะ";
    }
  };

  // Generate date options (today + next 7 days)
  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 8; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };

  const dates = generateDateOptions();
  const todaySchedules = schedules;

  // Load schedules when component mounts or date changes
  useEffect(() => {
    fetchSchedules(selectedDate);
  }, [selectedDate]);

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <RefreshCw className="w-8 h-8 text-blue-600 mx-auto mb-4 animate-spin" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">กำลังโหลดข้อมูล...</h3>
          <p className="text-gray-600">กรุณารอสักครู่</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">เกิดข้อผิดพลาด</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => fetchSchedules(selectedDate)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              🚌
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ระบบคนขับ</h1>
              <p className="text-gray-600">
                {driverInfo ? `สวัสดี คุณ${driverInfo.driverName}` : 'จัดการรอบรถและเส้นทางของคุณ'}
              </p>
            </div>
            <button
              onClick={() => fetchSchedules(selectedDate)}
              className="ml-auto p-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="รีเฟรชข้อมูล"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {/* Date Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map(date => {
              const dateObj = new Date(date);
              const isToday = date === new Date().toISOString().split('T')[0];
              const isSelected = date === selectedDate;
              
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-colors ${
                    isSelected 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {isToday ? 'วันนี้' : dateObj.toLocaleDateString('th-TH', { weekday: 'short' })}
                    </div>
                    <div className="text-xs">
                      {dateObj.toLocaleDateString('th-TH', { day: '2-digit', month: '2-digit' })}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {todaySchedules.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่มีรอบรถในวันนี้</h3>
              <p className="text-gray-600">คุณไม่มีรอบรถที่ต้องขับในวันที่เลือก</p>
            </div>
          ) : (
            todaySchedules.map((schedule) => (
              <div key={schedule.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{schedule.routeName}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(schedule.status)}`}>
                        {getStatusText(schedule.status)}
                      </span>
                      {schedule.vehicleInfo && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {schedule.vehicleInfo.licensePlate}
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{schedule.departureTime} - {schedule.arrivalTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{schedule.passengerCount}/{schedule.maxPassengers} คน</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{schedule.startLocation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{schedule.endLocation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 ml-4">
                    {/* View Passengers Button */}
                    <button
                      onClick={() => handleViewPassengers(schedule)}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="ดูรายชื่อผู้โดยสาร"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">ดูผู้โดยสาร</span>
                    </button>

                    {schedule.status === "pending" && (
                      <button
                        onClick={() => handleStartWork(schedule.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        เริ่มงาน
                      </button>
                    )}
                    
                    {schedule.status === "in-progress" && (
                      <button
                        onClick={() => handleCompleteWork(schedule.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        ปิดงาน
                      </button>
                    )}

                    {schedule.status === "completed" && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                        เสร็จแล้ว
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>ผู้โดยสาร</span>
                    <span>{schedule.passengerCount}/{schedule.maxPassengers}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(schedule.passengerCount / schedule.maxPassengers) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Quick Passenger Preview */}
                {schedule.passengers && schedule.passengers.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">ผู้โดยสาร ({schedule.passengers.length} คน)</h4>
                      <button
                        onClick={() => handleViewPassengers(schedule)}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        ดูทั้งหมด
                      </button>
                    </div>
                    <div className="space-y-1">
                      {schedule.passengers.slice(0, 2).map((passenger, index) => (
                        <div key={passenger.bookingId} className="text-xs text-gray-600 flex items-center justify-between">
                          <span>{index + 1}. {passenger.passengerName}</span>
                          <span className="text-gray-500">{passenger.originStop} → {passenger.destinationStop}</span>
                        </div>
                      ))}
                      {schedule.passengers.length > 2 && (
                        <div className="text-xs text-gray-500">
                          และอีก {schedule.passengers.length - 2} คน...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">สรุปวันนี้</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {todaySchedules.filter(s => s.status === "pending").length}
              </div>
              <div className="text-sm text-yellow-700">รอเริ่มงาน</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {todaySchedules.filter(s => s.status === "in-progress").length}
              </div>
              <div className="text-sm text-blue-700">กำลังขับ</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {todaySchedules.filter(s => s.status === "completed").length}
              </div>
              <div className="text-sm text-green-700">เสร็จสิ้น</div>
            </div>
          </div>
        </div>
      </div>

      {/* Passenger Modal */}
      <PassengerModal
        isOpen={isPassengerModalOpen}
        onClose={() => setIsPassengerModalOpen(false)}
        schedule={selectedSchedule}
      />
    </>
  );
}
