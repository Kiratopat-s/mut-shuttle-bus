
-- Add more departments
INSERT INTO departments (department_name) VALUES
('mathematics'),
('science'),
('transportation'),
('administration'),
('library');

-- Add more employees
INSERT INTO employees (position, department_id) VALUES
('teacher', 2),
('teacher', 3),
('librarian', 5),
('driver', 3),
('admin_staff', 4);

-- Add more users (role_id: 1=admin, 2=teacher, 3=student, 4=driver)
INSERT INTO users (role_id, employee_id, first_name, last_name, email, password) VALUES
(1, 5, 'delta', 'admin', 'delta.admin@gmail.com', 'MTIzNA=='), -- admin staff
(2, 4, 'ella', 'teach', 'ella.teach@gmail.com', 'MTIzNA=='), -- teacher science
(3, NULL, 'felix', 'learn', 'felix.learn@gmail.com', 'MTIzNA=='), -- student no employee
(3, NULL, 'hanna', 'bright', 'hanna.bright@gmail.com', 'MTIzNA=='), -- another student
(4, 6, 'igor', 'drive', 'igor.drive@gmail.com', 'MTIzNA=='), -- driver
(4, 7, 'juno', 'move', 'juno.move@gmail.com', 'MTIzNA=='); -- driver 2

-- Add more vehicles
INSERT INTO vehicles (vehicle_type_id, current_stop_id, license_plate, capacity, status) VALUES
(1, 2, 'กข 5555 กทม', 60, 'ACTIVE'),
(2, 3, 'กข 6666 กทม', 30, 'ACTIVE'),
(3, NULL, 'กข 4444 กทม', 20, 'MAINTENANCE'),
(4, 5, 'กข 2323 กทม', 10, 'ACTIVE'),
(1, 6, 'กข 1414 กทม', 55, 'ACTIVE');

-- Add more vehicle route schedules (spread across past, present, and future)
INSERT INTO vehicle_route_schedules (vehicle_id, route_id, driver_id, schedule_time, status) VALUES
(4, 3, 6, '2025-09-15 07:30:00'::timestamp, 'COMPLETED'),
(5, 2, 6, '2025-09-28 09:00:00'::timestamp, 'CANCELLED'),
(6, 1, 7, '2025-09-29 08:30:00'::timestamp, 'COMPLETED'),
(7, 3, 7, '2025-10-01 07:45:00'::timestamp, 'ONGOING'),
(8, 2, 6, '2025-10-02 08:00:00'::timestamp, 'UPCOMING'),
(9, 1, 7, '2025-10-05 09:15:00'::timestamp, 'UPCOMING'),
(10, 3, 6, '2025-10-10 07:30:00'::timestamp, 'UPCOMING');

-- Add more bookings (varied statuses)
INSERT INTO bookings (origin_stop_id, destination_stop_id, user_id, vehicle_route_schedule_id, status) VALUES
(1, 3, 2, 4, 'COMPLETED'), -- teacher past trip
(2, 5, 3, 5, 'CANCELLED'), -- student cancelled
(3, 6, 4, 6, 'MISSED'),   -- student missed
(1, 4, 5, 7, 'BOOKED'),    -- student booked for today
(2, 6, 6, 8, 'BOOKED'),    -- driver user testing booking
(5, 1, 7, 9, 'BOOKED'),    -- another future booking
(3, 2, 3, 10, 'BOOKED');  -- waiting list use-case
