"use client";

import { useState, useEffect } from "react";
import { Shield, Save, RotateCcw, Loader2 } from "lucide-react";
import {
  permissionApi,
  Permission,
  RoleInfo,
} from "@/lib/permission-api-client";

export default function PermissionPage() {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [roles, setRoles] = useState<RoleInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<
    Map<string, { roleId: number; permissionId: number; granted: boolean }>
  >(new Map());

  // Fetch permissions on mount
  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await permissionApi.getPermissions();
      setPermissions(data.permissions);
      setRoles(data.roles);
      setPendingChanges(new Map());
      setHasChanges(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load permissions";
      setError(message);
      console.error("Failed to fetch permissions:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleToggle = (permissionId: number, roleName: string) => {
    const role = roles.find((r) => r.roleName === roleName);
    if (!role) return;

    const changeKey = `${permissionId}-${role.roleId}`;
    const currentValue =
      permissions.find((p) => p.permissionId === permissionId)?.roles[
        roleName
      ] || false;
    const newValue = !currentValue;

    // Update local state optimistically
    setPermissions((prev) =>
      prev.map((permission) =>
        permission.permissionId === permissionId
          ? {
              ...permission,
              roles: {
                ...permission.roles,
                [roleName]: newValue,
              },
            }
          : permission
      )
    );

    // Track the change
    const newChanges = new Map(pendingChanges);
    newChanges.set(changeKey, {
      roleId: role.roleId,
      permissionId,
      granted: newValue,
    });
    setPendingChanges(newChanges);
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);

      // Save all pending changes
      await Promise.all(
        Array.from(pendingChanges.values()).map((change) =>
          permissionApi.updateRolePermission(
            change.roleId,
            change.permissionId,
            change.granted
          )
        )
      );

      setPendingChanges(new Map());
      setHasChanges(false);
      alert("บันทึกการเปลี่ยนแปลงเรียบร้อยแล้ว!");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save changes";
      setError(message);
      alert(`เกิดข้อผิดพลาด: ${message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    if (confirm("คุณต้องการรีเซ็ตการเปลี่ยนแปลงทั้งหมดหรือไม่?")) {
      await fetchPermissions();
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

  const getRoleToggleColor = (role: string) => {
    switch (role) {
      case "admin":
        return { active: "bg-red-600", focus: "focus:ring-red-500" };
      case "driver":
        return { active: "bg-blue-600", focus: "focus:ring-blue-500" };
      case "student":
        return { active: "bg-green-600", focus: "focus:ring-green-500" };
      case "teacher":
        return { active: "bg-purple-600", focus: "focus:ring-purple-500" };
      default:
        return { active: "bg-gray-600", focus: "focus:ring-gray-500" };
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-red-600" />
        </div>
      </div>
    );
  }

  if (error && permissions.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
          <button
            onClick={fetchPermissions}
            className="mt-2 text-sm text-red-600 underline hover:no-underline"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-red-100 rounded-lg">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              จัดการสิทธิ์ระบบ
            </h1>
            <p className="text-gray-600">
              กำหนดสิทธิ์การเข้าถึงระบบต่างๆ สำหรับแต่ละบทบาท
            </p>
          </div>
        </div>

        {/* Actions */}
        {hasChanges && (
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
            </button>
            <button
              onClick={handleReset}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-gray-800 active:bg-gray-900 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RotateCcw className="w-4 h-4" />
              รีเซ็ต
            </button>
          </div>
        )}
      </div>

      {/* Permission Matrix Table */}
      <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-red-800 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  สิทธิ์
                </th>
                {roles.map((role) => (
                  <th
                    key={role.roleId}
                    className="px-6 py-4 text-center text-sm font-semibold"
                  >
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(
                        role.roleName
                      )}`}
                    >
                      {getRoleDisplayName(role.roleName)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {permissions.map((permission) => (
                <tr
                  key={permission.permissionId}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {permission.permissionName}
                        </div>
                      </div>
                    </div>
                  </td>

                  {roles.map((role) => {
                    const isGranted = permission.roles[role.roleName] || false;
                    const toggleColor = getRoleToggleColor(role.roleName);

                    return (
                      <td key={role.roleId} className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            handleRoleToggle(
                              permission.permissionId,
                              role.roleName
                            )
                          }
                          disabled={isSaving}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                            isGranted ? toggleColor.active : "bg-gray-200"
                          } ${toggleColor.focus}`}
                          title={`${
                            isGranted ? "เพิกถอน" : "ให้"
                          }สิทธิ์ ${getRoleDisplayName(role.roleName)}`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              isGranted ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {permissions.length === 0 && (
          <div className="text-center py-12 bg-gray-50">
            <p className="text-gray-500">ไม่พบข้อมูลสิทธิ์</p>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map((role) => {
          const rolePermissions = permissions.filter(
            (p) => p.roles[role.roleName]
          );
          return (
            <div
              key={role.roleId}
              className="bg-white rounded-lg border-2 border-gray-200 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeColor(
                    role.roleName
                  )}`}
                >
                  {getRoleDisplayName(role.roleName)}
                </div>
                <span className="text-sm text-gray-500">
                  ({rolePermissions.length} สิทธิ์)
                </span>
              </div>
              <div className="space-y-2">
                {rolePermissions.map((permission) => (
                  <div
                    key={permission.permissionId}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Shield className="w-4 h-4" />
                    <span>{permission.permissionName}</span>
                  </div>
                ))}
                {rolePermissions.length === 0 && (
                  <p className="text-sm text-gray-400">ไม่มีสิทธิ์</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Save Button (Fixed at bottom when changes exist) */}
      {hasChanges && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 p-4 z-200">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก
            </span>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "กำลังบันทึก..." : "บันทึก"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
