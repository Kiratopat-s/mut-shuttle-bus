-- Additional permissions for enhanced system functionality
-- Note: This script assumes roles and basic permissions from seed.sql are already loaded

-- Insert additional permissions (avoiding duplicates with ON CONFLICT DO NOTHING)
INSERT INTO permissions (permission_name) VALUES
('manage_users'),
('create_booking'),
('cancel_booking'),
('view_reports'),
('manage_permissions'),
('drive_vehicle'),
('update_vehicle_status'),
('manage_schedules')
ON CONFLICT (permission_name) DO NOTHING;

-- Get role IDs (these should exist from seed.sql)
-- We'll use subqueries to get IDs dynamically

-- Admin role permissions (comprehensive access)
-- Assuming admin is role_id = 1, but using subquery for safety
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT role_id FROM roles WHERE role_name = 'admin'),
    permission_id
FROM permissions
WHERE permission_name IN (
    'manage_users',
    'manage_bookings',
    'create_booking',
    'cancel_booking',
    'manage_vehicles',
    'manage_routes',
    'manage_schedules',
    'view_reports',
    'manage_permissions'
)
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Driver role permissions (vehicle and schedule management)
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT role_id FROM roles WHERE role_name = 'driver'),
    permission_id
FROM permissions
WHERE permission_name IN (
    'drive_vehicle',
    'update_vehicle_status',
    'manage_schedules'
)
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Student role permissions (booking functionality)
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT role_id FROM roles WHERE role_name = 'student'),
    permission_id
FROM permissions
WHERE permission_name IN (
    'create_booking',
    'cancel_booking'
)
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Teacher role permissions (booking functionality)
INSERT INTO role_permissions (role_id, permission_id)
SELECT 
    (SELECT role_id FROM roles WHERE role_name = 'teacher'),
    permission_id
FROM permissions
WHERE permission_name IN (
    'create_booking',
    'cancel_booking'
)
ON CONFLICT (role_id, permission_id) DO NOTHING;
