"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Users,
  Shield,
  X,
  UserPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "student" | "driver";
  createdAt: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "สมชาย ใจดี",
    email: "somchai@mut.ac.th",
    role: "student",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "สมหญิง สวยงาม",
    email: "somying@mut.ac.th",
    role: "admin",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "คนขับรถ หนึ่ง",
    email: "driver1@mut.ac.th",
    role: "driver",
    createdAt: "2024-01-05",
  },
];

export default function AdminPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "student" as User["role"],
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", role: "student" });
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setIsModalOpen(true);
  };

  const handleManagePermissions = () => {
    router.push(`/permission`);
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm("คุณแน่ใจหรือไม่ที่จะลบผู้ใช้นี้?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (editingUser) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...formData } : user
        )
      );
    } else {
      // Add new user
      const newUser: User = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setUsers([...users, newUser]);
    }

    setIsLoading(false);
    setIsModalOpen(false);
  };

  const getRoleBadgeColor = (role: User["role"]) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "driver":
        return "bg-blue-100 text-blue-800";
      case "student":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <select
          title="Filter by role"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">ทุกบทบาท</option>
          <option value="admin">ผู้ดูแลระบบ</option>
          <option value="student">นักศึกษา</option>
          <option value="driver">คนขับรถ</option>
        </select>

        <button
          onClick={handleAddUser}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          เพิ่มผู้ใช้
        </button>

        <button
          onClick={() => handleManagePermissions()}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          title="จัดการสิทธิ์"
        >
          <Shield className="w-4 h-4" />
          จัดการสิทธิ์
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  ชื่อ
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  อีเมล
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  บทบาท
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  วันที่สร้าง
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {user.name}
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
                      {user.role === "admin"
                        ? "ผู้ดูแลระบบ"
                        : user.role === "student"
                        ? "นักศึกษา"
                        : "คนขับรถ"}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.createdAt}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditUser(user)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="แก้ไข"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
          <div className="text-center py-8">
            <p className="text-gray-500">ไม่พบข้อมูลผู้ใช้</p>
          </div>
        )}
      </div>

      {/* Beautiful Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => !isLoading && setIsModalOpen(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-in zoom-in-95 slide-in-from-bottom-4 duration-200">
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-red-500 to-pink-500 px-6 py-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    {editingUser ? (
                      <Edit className="w-5 h-5 text-white" />
                    ) : (
                      <UserPlus className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {editingUser ? "แก้ไขผู้ใช้" : "เพิ่มผู้ใช้ใหม่"}
                    </h2>
                    <p className="text-red-100 text-sm">
                      {editingUser
                        ? "อัปเดตข้อมูลผู้ใช้งาน"
                        : "กรอกข้อมูลผู้ใช้ใหม่"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  title="Close modal"
                  onClick={() => !isLoading && setIsModalOpen(false)}
                  disabled={isLoading}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800">
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  required
                  disabled={isLoading}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="กรุณากรอกชื่อผู้ใช้"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800">
                  อีเมล
                </label>
                <input
                  type="email"
                  required
                  disabled={isLoading}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="example@mut.ac.th"
                />
              </div>

              {/* Role Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800">
                  บทบาท
                </label>
                <div className="relative">
                  <select
                    title="Select user role"
                    value={formData.role}
                    disabled={isLoading}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        role: e.target.value as User["role"],
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-0 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed appearance-none bg-white"
                  >
                    <option value="student">🎓 นักศึกษา</option>
                    <option value="admin">👨‍💼 ผู้ดูแลระบบ</option>
                    <option value="driver">🚐 คนขับรถ</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      กำลังบันทึก...
                    </>
                  ) : (
                    <>{editingUser ? "บันทึกการเปลี่ยนแปลง" : "เพิ่มผู้ใช้"}</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
