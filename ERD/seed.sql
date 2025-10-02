INSERT INTO roles (role_name) VALUES
('admin'),
('teacher'),
('student'),
('driver');

INSERT INTO permissions (permission_name) VALUES
('manage_vehicle'),
('manage_routes'),
('manage_vehicle_routes'),
('manage_bookings'),
('manage_buss_stops'),
('manage_roles'),
('manage_employees');

INSERT INTO role_permissions (role_id, permission_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(2, 4),
(2, 7),
(3, 4);


INSERT INTO departments (department_name) VALUES
('head section'),
('computer'),
('bussiness');

INSERT INTO employees (position, department_id) VALUES
('lead_teacher', 1),
('techer', 1),
('student', NULL);

INSERT INTO users (role_id, employee_id, first_name, last_name, email, password) VALUES
(1, 1, 'alpha', 'test', 'al@gmail.com', 'MTIzNA=='),
(2, 2, 'beta', 'mock', 'be@gmail.com', 'MTIzNA=='),
(3, 3, 'ceta', 'up', 'ce@gmail.com', 'MTIzNA=='),
(4, NULL, 'gamma', 'user', 'gam@gmail.com', 'MTIzNA==');

INSERT INTO bus_stops (stop_name, lat, lng) VALUES
('มหาวิทยาลัยเทคโนโลยีมหานคร', 13.842369, 100.855465),
('โลตัสหนองจอก', 13.8510867334329, 100.859600270392),
('โรงพยาบาลหนองจอก', 13.8590208081837, 100.858775133655),
('Big C หนองจอก', 13.8544551536126, 100.854760453288),
('สวนสาธารณหนองจอก', 13.8545320368738, 100.858981124453),
('ร้านส้มตำป้านาง', 13.8551926866953, 100.850608795618);

INSERT INTO routes (route_name, overall_travel_time) VALUES
('เส้นทางที่ 1', 30),
('เส้นทางที่ 2', 13),
('เส้นทางที่ 3', 12);

INSERT INTO vehicle_types (vehicle_type_name, default_capacity) VALUES
('bus', 60),
('mini bus', 30),
('van', 20),
('mini van', 10);

INSERT INTO vehicles (vehicle_type_id, current_stop_id, license_plate, capacity, status) VALUES
(1, 1, 'กก 1111 กทม', 60, 'ACTIVE'),
(2, NULL, 'กก 2222 กทม', 20, 'INACTIVE'),
(3, 1, 'กก 3333 กทม', 15, 'ACTIVE'),
(4, 1, 'กก 4444 กทม', 10, 'INACTIVE'),
(1, NULL, 'กก 5555 กทม', 54, 'MAINTENANCE'),
(2, 1, 'กก 6666 กทม', 30, 'ACTIVE');

INSERT INTO route_bus_stops (route_id, bus_stop_id, next_stop_id, stop_order, travel_time) VALUES
(1, 1, 2, 0, 5),
(1, 2, 3, 1, 3),
(1, 3, 4, 2, 6),
(1, 4, 3, 3, 3),
(1, 3, 2, 4, 3),
(1, 2, 1, 5, 10),
(2, 1, 2, 0, 5),
(2, 2, 5, 1, 3),
(2, 5, 6, 2, 5),
(3, 4, 2, 0, 5),
(3, 2, 5, 1, 3),
(3, 5, 6, 2, 5),
(3, 6, 1, 3, 2);

INSERT INTO vehicle_route_schedules (vehicle_id, route_id, driver_id, schedule_time, status) VALUES
(1, 1, 4, '2025-09-30 08:00:00'::timestamp,  'CANCELLED'),
(2, 1, 4, '2025-09-30 08:30:00'::timestamp, 'UPCOMING'),
(3, 2, 4,'2025-09-20 08:00:00'::timestamp,  'COMPLETED');

INSERT INTO bookings (origin_stop_id, destination_stop_id, user_id, vehicle_route_schedule_id, status) VALUES
(2, 3, 2, 2, 'CANCELLED'),
(2, 4, 2, 2, 'BOOKED'),
(1, 2, 3, 2, 'BOOKED');