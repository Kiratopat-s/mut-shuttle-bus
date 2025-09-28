'use client'

import { useState } from 'react'
import { Shield, Settings, Users, Car, Calendar, FileText, Save, RotateCcw } from 'lucide-react'

interface Permission {
  id: string
  system: string
  description: string
  icon: React.ReactNode
  roles: {
    admin: boolean
    driver: boolean
    student: boolean
  }
}

export default function PermissionPage() {
  const [permissions, setPermissions] = useState<Permission[]>([
    {
      id: '1',
      system: 'จัดการผู้ใช้',
      description: 'เพิ่ม แก้ไข ลบข้อมูลผู้ใช้งาน',
      icon: <Users className="w-5 h-5" />,
      roles: {
        admin: true,
        driver: false,
        student: false
      }
    },
    {
      id: '2',
      system: 'จองรถรับส่ง',
      description: 'จองและยกเลิกการจองรถรับส่ง',
      icon: <Calendar className="w-5 h-5" />,
      roles: {
        admin: true,
        driver: false,
        student: true
      }
    },
    {
      id: '3',
      system: 'จัดการรถรับส่ง',
      description: 'จัดการเส้นทาง ตารางเวลา และข้อมูลรถ',
      icon: <Car className="w-5 h-5" />,
      roles: {
        admin: true,
        driver: true,
        student: false
      }
    },
    {
      id: '4',
      system: 'ดูรายงาน',
      description: 'เข้าถึงรายงานการใช้งานและสถิติ',
      icon: <FileText className="w-5 h-5" />,
      roles: {
        admin: true,
        driver: false,
        student: false
      }
    },
    {
      id: '5',
      system: 'ตั้งค่าระบบ',
      description: 'เปลี่ยนแปลงการตั้งค่าทั่วไปของระบบ',
      icon: <Settings className="w-5 h-5" />,
      roles: {
        admin: true,
        driver: false,
        student: false
      }
    },
    {
      id: '6',
      system: 'จัดการสิทธิ์',
      description: 'กำหนดสิทธิ์การใช้งานให้กับผู้ใช้',
      icon: <Shield className="w-5 h-5" />,
      roles: {
        admin: true,
        driver: false,
        student: false
      }
    }
  ])

  const [hasChanges, setHasChanges] = useState(false)

  const handleRoleToggle = (permissionId: string, role: keyof Permission['roles']) => {
    setPermissions(prev => 
      prev.map(permission => 
        permission.id === permissionId 
          ? {
              ...permission,
              roles: {
                ...permission.roles,
                [role]: !permission.roles[role]
              }
            }
          : permission
      )
    )
    setHasChanges(true)
  }

  const handleSave = () => {
    // Mock save to API
    console.log('Saving permissions:', permissions)
    alert('บันทึกการเปลี่ยนแปลงเรียบร้อยแล้ว!')
    setHasChanges(false)
  }

  const handleReset = () => {
    if (window.confirm('คุณต้องการรีเซ็ตการเปลี่ยนแปลงทั้งหมดหรือไม่?')) {
      // Reset to default or reload from server
      window.location.reload()
    }
  }

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'admin': return 'ผู้ดูแลระบบ'
      case 'driver': return 'คนขับรถ' 
      case 'student': return 'นักศึกษา'
      default: return role
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800'
      case 'driver': return 'bg-blue-100 text-blue-800'
      case 'student': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">จัดการสิทธิ์ระบบ</h1>
            <p className="text-gray-600">กำหนดสิทธิ์การเข้าถึงระบบต่างๆ สำหรับแต่ละบทบาท</p>
          </div>
        </div>

        {/* Actions */}
        {hasChanges && (
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              บันทึกการเปลี่ยนแปลง
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              รีเซ็ต
            </button>
          </div>
        )}
      </div>

      {/* Permission Matrix Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">ระบบ</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">รายละเอียด</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-red-700">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    ผู้ดูแลระบบ
                  </span>
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-blue-700">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    คนขับรถ
                  </span>
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-green-700">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    นักศึกษา
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {permissions.map((permission) => (
                <tr key={permission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                        {permission.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{permission.system}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    {permission.description}
                  </td>
                  
                  {/* Admin Column */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleRoleToggle(permission.id, 'admin')}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                        permission.roles.admin ? 'bg-red-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          permission.roles.admin ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </td>

                  {/* Driver Column */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleRoleToggle(permission.id, 'driver')}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        permission.roles.driver ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          permission.roles.driver ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </td>

                  {/* Student Column */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleRoleToggle(permission.id, 'student')}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                        permission.roles.student ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          permission.roles.student ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {(['admin', 'driver', 'student'] as const).map((role) => {
          const rolePermissions = permissions.filter(p => p.roles[role])
          return (
            <div key={role} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeColor(role)}`}>
                  {getRoleDisplayName(role)}
                </div>
                <span className="text-sm text-gray-500">
                  ({rolePermissions.length} สิทธิ์)
                </span>
              </div>
              <div className="space-y-2">
                {rolePermissions.map((permission) => (
                  <div key={permission.id} className="flex items-center gap-2 text-sm text-gray-600">
                    {permission.icon}
                    <span>{permission.system}</span>
                  </div>
                ))}
                {rolePermissions.length === 0 && (
                  <p className="text-sm text-gray-400">ไม่มีสิทธิ์</p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Save Button (Fixed at bottom when changes exist) */}
      {hasChanges && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก</span>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              บันทึก
            </button>
          </div>
        </div>
      )}
    </div>
  )
}