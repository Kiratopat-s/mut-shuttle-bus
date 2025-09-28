-- postgresql DDL

-- Main user table
CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    role INT NOT NULL DEFAULT 1 -- 1: passenger, 2: driver, 3: admin
    FOREIGN KEY (role) REFERENCES role(role_id)
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
);

CREATE TABLE role (
    role_id SERIAL PRIMARY KEY,
    role_name TEXT NOT NULL,
)

CREATE TABLE role_permission (
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(role_id),
    permission_id INT NOT NULL,
    FOREIGN KEY (permission_id) REFERENCES permission(permission_id),
    PRIMARY KEY (role_id, permission_id)
)

CREATE TABLE permission (
    permission_id SERIAL PRIMARY KEY,
    permission_name TEXT NOT NULL,
    FOREIGN KEY (permission_level) REFERENCES role(role_id)
)

CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    position TEXT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(department_id)
)

CREATE TABLE department (
    department_id SERIAL PRIMARY KEY,
    department_name TEXT NOT NULL
)


-- | role      | vehicle_system_pages | booking_pages | 
-- | driver    |      true        |    false      |
-- | passenger |     false        |    true       |
-- | admin     |      true        |    true       |


-- Main route table

CREATE TABLE buss_stop (
    buss_stop_id SERIAL PRIMARY KEY,
    stop_name TEXT NOT NULL,
    lat TEXT,
    long TEXT
)

CREATE TABLE route_buss_stop (
    route_id INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES route(route_id),
    buss_stop_id INT NOT NULL,
    FOREIGN KEY (buss_stop_id) REFERENCES buss_stop(buss_stop_id),
    stop_order INT NOT NULL,
    PRIMARY KEY (route_id, buss_stop_id)

    next_stop INT NOT NULL
    FOREIGN KEY (next_stop) REFERENCES buss_stop(buss_stop_id)


    travel_time INT -- in minutes
)

CREATE TABLE route (
    route_id SERIAL PRIMARY KEY,
    route_name TEXT NOT NULL,
    overall_travel_time INT -- in minutes
)

-- Main vehicle table


CREATE vehicle_type (
    vehicle_type_id SERIAL PRIMARY KEY,
    vehicle_type_name TEXT NOT NULL
    default_capacity INT NOT NULL
)

CREATE TABLE vehicle (
    vehicle_id SERIAL PRIMARY KEY,

    vehicle_type INT NOT NULL,
    FOREIGN KEY (vehicle_type) REFERENCES vehicle_type(vehicle_type_id),

    license_plate TEXT UNIQUE NOT NULL,
    capacity INT NOT NULL,
    status TEXT NOT NULL,

    current_location INT,
    FOREIGN KEY (current_location) REFERENCES buss_stop(buss_stop_id)

)

-- Logic to assign must not overlap
CREATE TABLE vehicle_route_schedule (

    vehicle_route_schedule_id SERIAL PRIMARY KEY,

    vehicle_id INT NOT NULL,
    FOREIGN KEY (vehicle_id) REFERENCES vehicle(vehicle_id),

    route_id INT NOT NULL,
    FOREIGN KEY (route_id) REFERENCES route(route_id),

    schedule_time TIMESTAMPTZ NOT NULL,

    driver_id INT,
    FOREIGN KEY (driver_id) REFERENCES user(user_id)

    status TEXT NOT NULL -- scheduled, in_progress, completed, cancelled

)

-- Main Booking table

CREATE TABLE booking (
    booking_id SERIAL PRIMARY KEY,

    origin_stop INT NOT NULL,
    FOREIGN KEY (origin_stop) REFERENCES buss_stop(buss_stop_id),
    
    destination_stop INT NOT NULL,
    FOREIGN KEY (destination_stop) REFERENCES buss_stop(buss_stop_id),

    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id),

    vehicle_route_schedule_id INT NOT NULL,
    FOREIGN KEY (vehicle_route_schedule_id) REFERENCES vehicle_route_schedule(vehicle_route_schedule_id)

    status TEXT NOT NULL -- booked, cancelled, completed
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
)






