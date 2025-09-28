'use client'

import { useState } from 'react'
import { Calendar, BarChart3, Users, Clock, FileText, Download, Filter, TrendingUp } from 'lucide-react'
import { Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

interface ReportData {
  route: string
  total: number
  boarded: number
  late: number
  noShow: number
}

interface BookingData {
  route: string
  reservations: number
  before17: number
  after17: number
}

interface MonthlyData {
  route: string
  vehicleCode: string
  bookings: number
}

const mockReportData: ReportData[] = [
  { route: 'สมชาย โซดี', total: 12, boarded: 11, late: 1, noShow: 0 },
  { route: 'สมหญิง โซดา', total: 10, boarded: 9, late: 0, noShow: 1 },
  { route: 'สมศรี โซงาม', total: 8, boarded: 7, late: 0, noShow: 1 },
  { route: 'อารีย์วิน ศรีสุข', total: 6, boarded: 5, late: 1, noShow: 0 },
  { route: 'วุฒิพล เทพทอง', total: 5, boarded: 4, late: 1, noShow: 0 }
]

const mockBookingData: BookingData[] = [
  { route: 'สมชาย โซดี', reservations: 25, before17: 18, after17: 7 },
  { route: 'สมหญิง โซดา', reservations: 20, before17: 15, after17: 5 },
  { route: 'สมศรี โซงาม', reservations: 18, before17: 12, after17: 6 },
  { route: 'อารีย์วิน ศรีสุข', reservations: 15, before17: 10, after17: 5 },
  { route: 'วุฒิพล เทพทอง', reservations: 12, before17: 8, after17: 4 },
  { route: 'บัญญา โซดรง', reservations: 10, before17: 7, after17: 3 }
]

const mockMonthlyData: MonthlyData[] = [
  { route: 'รถตู้ 9 ที่นั่ง', vehicleCode: 'สย 2591', bookings: 28 },
  { route: 'รถตู้ 9 ที่นั่ง', vehicleCode: 'สย 2599', bookings: 25 },
  { route: 'รถตู้ 9 ที่นั่ง', vehicleCode: 'ขย 7788', bookings: 10 },
  { route: 'รถบัส 20 ที่นั่ง', vehicleCode: 'บก 1130', bookings: 22 },
  { route: 'รถบัส 20 ที่นั่ง', vehicleCode: 'กข 4455', bookings: 15 },
  { route: 'รถมินิบัส 15 ที่นั่ง', vehicleCode: 'นน 5566', bookings: 12 },
  { route: 'รถมินิบัส 15 ที่นั่ง', vehicleCode: 'มม 8899', bookings: 8 }
]

export default function ReportPage() {
  const [selectedReport, setSelectedReport] = useState<'usage' | 'booking' | 'monthly'>('usage')
  const [dateRange, setDateRange] = useState('2568-04-12_2568-04-15')

  // Chart data for usage report
  const usageBarData = {
    labels: mockReportData.map(item => item.route),
    datasets: [
      {
        label: 'การจอง/ขึ้นรถ',
        data: mockReportData.map(item => item.total),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      },
      {
        label: 'ขึ้นรถ',
        data: mockReportData.map(item => item.boarded),
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1
      },
      {
        label: 'ยกเลิก',
        data: mockReportData.map(item => item.late),
        backgroundColor: 'rgba(251, 191, 36, 0.8)',
        borderColor: 'rgb(251, 191, 36)',
        borderWidth: 1
      },
      {
        label: 'No Show',
        data: mockReportData.map(item => item.noShow),
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1
      }
    ]
  }

  const usagePieData = {
    labels: ['ขึ้นรถ', 'ยกเลิก', 'No Show'],
    datasets: [
      {
        data: [
          mockReportData.reduce((sum, item) => sum + item.boarded, 0),
          mockReportData.reduce((sum, item) => sum + item.late, 0),
          mockReportData.reduce((sum, item) => sum + item.noShow, 0)
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(251, 191, 36)',
          'rgb(239, 68, 68)'
        ],
        borderWidth: 2
      }
    ]
  }

  // Chart data for booking times
  const bookingBarData = {
    labels: mockBookingData.map(item => item.route),
    datasets: [
      {
        label: 'ก่อน 17:00',
        data: mockBookingData.map(item => item.before17),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      },
      {
        label: 'หลัง 17:00',
        data: mockBookingData.map(item => item.after17),
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 1
      }
    ]
  }

  // Chart data for monthly report
  const monthlyBarData = {
    labels: mockMonthlyData.map(item => item.vehicleCode),
    datasets: [
      {
        label: 'จำนวนรอบ',
        data: mockMonthlyData.map(item => item.bookings),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 69, 19, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(251, 191, 36)',
          'rgb(239, 68, 68)',
          'rgb(139, 69, 19)',
          'rgb(147, 51, 234)',
          'rgb(236, 72, 153)'
        ],
        borderWidth: 1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'รายงานการใช้งาน'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'สัดส่วนรวม ลูกค้าทุกราย'
      }
    }
  }

  // Group monthly data by vehicle type
  const groupedMonthlyData = mockMonthlyData.reduce((acc, item) => {
    if (!acc[item.route]) {
      acc[item.route] = []
    }
    acc[item.route].push(item)
    return acc
  }, {} as Record<string, MonthlyData[]>)

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">รายงานและสstatistics</h1>
            <p className="text-gray-600">ระบบรายงานการใช้งานรถรับส่ง</p>
          </div>
        </div>
      </div>

      {/* Report Type Selector */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">เลือกประเภทรายงาน</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setSelectedReport('usage')}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedReport === 'usage'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">รายงานการใช้งาน</span>
            </div>
            <p className="text-sm text-left">พฤติกรรมผู้ใช้ การจอง ขึ้นรถ ยกเลิก และ No Show</p>
          </button>

          <button
            onClick={() => setSelectedReport('booking')}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedReport === 'booking'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">รายงานเวลาจอง</span>
            </div>
            <p className="text-sm text-left">สถิติการจองตามช่วงเวลา ก่อน-หลัง 17:00 น.</p>
          </button>

          <button
            onClick={() => setSelectedReport('monthly')}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedReport === 'monthly'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-600'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">รายงานแต่ล่ะคัน</span>
            </div>
            <p className="text-sm text-left">สถิติการใช้งานแยกตามประเภทรถและเส้นทาง</p>
          </button>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-gray-700">ช่วงเวลา:</span>
          </div>
          <div className="flex gap-2">
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="2568-04-12_2568-04-15">12-15 เมษายน 2568</option>
              <option value="2568-04-01_2568-04-30">1-30 เมษายน 2568</option>
              <option value="2568-03-01_2568-03-31">มีนาคม 2568</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Report Content */}
      {selectedReport === 'usage' && (
        <div className="space-y-6">
          {/* Usage Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                รายงานพฤติกรรมผู้ใช้การใช้งานรถ วันที่ 12 เมษายน 2568 - 15 เมษายน 2568
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">ผู้ขับ</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">การจอง/ขึ้นรถ</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">ขึ้นรถ</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">ยกเลิก</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">No Show</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockReportData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.route}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.total}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.boarded}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.late}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.noShow}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td className="px-6 py-4 text-sm text-gray-900">รวมทั้งหมด</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockReportData.reduce((sum, item) => sum + item.total, 0)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockReportData.reduce((sum, item) => sum + item.boarded, 0)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockReportData.reduce((sum, item) => sum + item.late, 0)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockReportData.reduce((sum, item) => sum + item.noShow, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                พฤติกรรมผู้ใช้ (12 เมษายน 2568 - 15 เมษายน 2568)
              </h3>
              <div className="h-80">
                <Bar data={usageBarData} options={chartOptions} />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                สัดส่วนรวม ลูกค้าทุกราย (12 เมษายน 2568 - 15 เมษายน 2568)
              </h3>
              <div className="h-80">
                <Pie data={usagePieData} options={pieOptions} />
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'booking' && (
        <div className="space-y-6">
          {/* Booking Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                รายงานการแบ่งงานในช่วงวันที่ 1 - 30 เม.ย. 2568
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">คนขับ</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">รวมจองทั้งหมด</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">ก่อน 17:00</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">หลัง 17:00</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockBookingData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.route}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.reservations}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.before17}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.after17}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td className="px-6 py-4 text-sm text-gray-900">รวมทั้งหมด</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockBookingData.reduce((sum, item) => sum + item.reservations, 0)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockBookingData.reduce((sum, item) => sum + item.before17, 0)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {mockBookingData.reduce((sum, item) => sum + item.after17, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Booking Time Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              จำนวนรองงานที่ได้รับ (ก่อน/หลัง 17:00) 1-30 เม.ย. 2568
            </h3>
            <div className="h-80">
              <Bar data={bookingBarData} options={chartOptions} />
            </div>
          </div>
        </div>
      )}

      {selectedReport === 'monthly' && (
        <div className="space-y-6">
          {/* Monthly Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                รายงานจำนวนการมอบหมายงานให้รถแต่ละประเภทในช่วงวันที่ 1 - 30 เมษายน 2568
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">ประเภท</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">รถ (ทะเบียน)</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-900">จำนวนรอบ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockMonthlyData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.route}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.vehicleCode}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{row.bookings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">สรุปแต่ละประเภทรวมรวมดังนี้</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(groupedMonthlyData).map(([vehicleType, vehicles]) => {
                const totalBookings = vehicles.reduce((sum, vehicle) => sum + vehicle.bookings, 0)
                return (
                  <div key={vehicleType} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{vehicleType}</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{totalBookings}</div>
                    <div className="text-sm text-gray-600">
                      {vehicles.length} คัน
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">รวมทั้งหมด</span>
                <span className="text-2xl font-bold text-blue-600">
                  {mockMonthlyData.reduce((sum, item) => sum + item.bookings, 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Monthly Bar Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              จำนวนรอบงานแยกตามรถแต่ละคัน (1-30 เมษายน 2568)
            </h3>
            <div className="h-80">
              <Bar data={monthlyBarData} options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  title: {
                    display: true,
                    text: 'จำนวนรอบงานแยกตามรถแต่ละคัน'
                  }
                }
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}