"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserInformation } from "@/provider/UserProvider";
import { getUserPermissions } from "@/lib/permissions";
import Loading from "@/components/loading/Loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  requiredRoles?: string[];
  requireAll?: boolean;
  redirectTo?: string;
}

/**
 * ProtectedRoute Component
 *
 * Wraps page content to ensure user has required permissions/roles.
 * Redirects to home or specified page if user lacks access.
 *
 * Usage:
 * ```tsx
 * export default function AdminPage() {
 *   return (
 *     <ProtectedRoute requiredPermissions={["manage_users"]}>
 *       <AdminContent />
 *     </ProtectedRoute>
 *   );
 * }
 * ```
 */
export function ProtectedRoute({
  children,
  requiredPermissions = [],
  requiredRoles = [],
  requireAll = false,
  redirectTo = "/",
}: ProtectedRouteProps) {
  const router = useRouter();
  const { user } = useUserInformation();

  useEffect(() => {
    // If no user, redirect to home
    if (!user) {
      router.push("/");
      return;
    }

    const userPermissions = getUserPermissions(user.role.RolePermission);
    const userRole = user.role.roleName;

    // Check role requirement
    if (requiredRoles.length > 0) {
      if (!requiredRoles.includes(userRole)) {
        router.push(redirectTo);
        return;
      }
    }

    // Check permission requirement
    if (requiredPermissions.length > 0) {
      const hasPermission = requireAll
        ? requiredPermissions.every((p) => userPermissions.includes(p))
        : requiredPermissions.some((p) => userPermissions.includes(p));

      if (!hasPermission) {
        router.push(redirectTo);
        return;
      }
    }
  }, [
    user,
    router,
    requiredPermissions,
    requiredRoles,
    requireAll,
    redirectTo,
  ]);

  // Show loading while checking permissions
  if (!user) {
    return <Loading title="Checking permissions..." />;
  }

  // User has access, render children
  return <>{children}</>;
}

/**
 * Simple permission check component
 * Conditionally renders children if user has required permissions
 */
interface RequirePermissionProps {
  children: React.ReactNode;
  permissions: string[];
  requireAll?: boolean;
  fallback?: React.ReactNode;
}

export function RequirePermission({
  children,
  permissions,
  requireAll = false,
  fallback = null,
}: RequirePermissionProps) {
  const { user, hasAnyPermission } = useUserInformation();

  if (!user) {
    return <>{fallback}</>;
  }

  const userPermissions = getUserPermissions(user.role.RolePermission);

  const hasPermission = requireAll
    ? permissions.every((p) => userPermissions.includes(p))
    : hasAnyPermission(permissions);

  if (!hasPermission) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

/**
 * Simple role check component
 * Conditionally renders children if user has required role
 */
interface RequireRoleProps {
  children: React.ReactNode;
  roles: string[];
  fallback?: React.ReactNode;
}

export function RequireRole({
  children,
  roles,
  fallback = null,
}: RequireRoleProps) {
  const { user } = useUserInformation();

  if (!user || !roles.includes(user.role.roleName)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
