# Booking API Documentation

This document describes the booking API endpoints for the MUT Shuttle Bus system.

## Authentication

All endpoints require authentication via JWT token stored in `accessToken` cookie.

## Response Format

All endpoints return a standardized JSON response:

```typescript
{
  success: boolean;
  data?: any;          // Response data
  message?: string;    // Success message
  error?: string;      // Error message
}
```

## Endpoints

### 1. Create Booking

**POST** `/api/booking/create`

Create a new booking for a vehicle route schedule.

#### Request Body

```json
{
  "originStopId": 1,
  "destinationStopId": 3,
  "vehicleRouteScheduleId": 5
}
```

#### Response (201 Created)

```json
{
  "success": true,
  "data": {
    "bookingId": 123,
    "userId": 45,
    "originStopId": 1,
    "destinationStopId": 3,
    "vehicleRouteScheduleId": 5,
    "status": "BOOKED",
    "createdAt": "2025-10-02T10:30:00Z",
    "updatedAt": "2025-10-02T10:30:00Z",
    "originStop": { ... },
    "destinationStop": { ... },
    "user": { ... },
    "vehicleRouteSchedule": { ... }
  },
  "message": "Booking created successfully"
}
```

#### Error Responses

- **400 Bad Request**: Validation failed, origin and destination are the same
- **401 Unauthorized**: Not authenticated
- **404 Not Found**: Schedule or bus stops not found
- **409 Conflict**: Already have a booking for this schedule, or schedule is full

---

### 2. Get All Bookings for User

**GET** `/api/booking/get-all-for-user-id?userId=<id>&status=<status>`

Get all bookings for a specific user (defaults to current user).

#### Query Parameters

- `userId` (optional): User ID to fetch bookings for. If omitted, returns current user's bookings.
  - Non-admin users can only view their own bookings
  - Admin users can view any user's bookings
- `status` (optional): Filter by booking status
  - Valid values: `BOOKED`, `CANCELLED`, `MISSED`, `COMPLETED`

#### Response (200 OK)

```json
{
  "success": true,
  "data": {
    "bookings": [
      {
        "bookingId": 123,
        "userId": 45,
        "originStopId": 1,
        "destinationStopId": 3,
        "vehicleRouteScheduleId": 5,
        "status": "BOOKED",
        "createdAt": "2025-10-02T10:30:00Z",
        "updatedAt": "2025-10-02T10:30:00Z",
        "originStop": { ... },
        "destinationStop": { ... },
        "user": { ... },
        "vehicleRouteSchedule": { ... }
      }
    ],
    "count": 1
  },
  "message": "Bookings retrieved successfully"
}
```

#### Error Responses

- **401 Unauthorized**: Not authenticated
- **403 Forbidden**: Trying to view another user's bookings without admin role

---

### 3. Get Booking by ID

**GET** `/api/booking/get-by-booking-id?bookingId=<id>`

Get a specific booking by its ID.

#### Query Parameters

- `bookingId` (required): The booking ID to retrieve

#### Response (200 OK)

```json
{
  "success": true,
  "data": {
    "bookingId": 123,
    "userId": 45,
    "originStopId": 1,
    "destinationStopId": 3,
    "vehicleRouteScheduleId": 5,
    "status": "BOOKED",
    "createdAt": "2025-10-02T10:30:00Z",
    "updatedAt": "2025-10-02T10:30:00Z",
    "originStop": { ... },
    "destinationStop": { ... },
    "user": { ... },
    "vehicleRouteSchedule": { ... }
  },
  "message": "Booking retrieved successfully"
}
```

#### Error Responses

- **400 Bad Request**: Booking ID is required
- **401 Unauthorized**: Not authenticated
- **403 Forbidden**: Trying to view another user's booking without admin role
- **404 Not Found**: Booking not found

---

### 4. Update Booking

**PATCH** `/api/booking/edit-by-booking-id`

Update an existing booking.

#### Request Body

```json
{
  "bookingId": 123,
  "status": "CANCELLED", // Optional
  "originStopId": 2, // Optional
  "destinationStopId": 4, // Optional
  "vehicleRouteScheduleId": 6 // Optional
}
```

#### Status Transitions

- Regular users can only change status from `BOOKED` to `CANCELLED`
- Admin users can change to any status
- Cannot edit `COMPLETED` or `MISSED` bookings

#### Response (200 OK)

```json
{
  "success": true,
  "data": {
    "bookingId": 123,
    "userId": 45,
    "originStopId": 2,
    "destinationStopId": 4,
    "vehicleRouteScheduleId": 6,
    "status": "CANCELLED",
    "createdAt": "2025-10-02T10:30:00Z",
    "updatedAt": "2025-10-02T11:00:00Z",
    "originStop": { ... },
    "destinationStop": { ... },
    "user": { ... },
    "vehicleRouteSchedule": { ... }
  },
  "message": "Booking updated successfully"
}
```

#### Error Responses

- **400 Bad Request**: Invalid data, invalid status transition, or editing a completed/missed booking
- **401 Unauthorized**: Not authenticated
- **403 Forbidden**: Trying to edit another user's booking without admin role
- **404 Not Found**: Booking, bus stops, or schedule not found
- **409 Conflict**: New schedule is full

---

### 5. Cancel Booking

**DELETE** `/api/booking/edit-by-booking-id?bookingId=<id>`

Cancel a booking (sets status to CANCELLED).

#### Query Parameters

- `bookingId` (required): The booking ID to cancel

#### Response (200 OK)

```json
{
  "success": true,
  "data": {
    "bookingId": 123,
    "userId": 45,
    "originStopId": 1,
    "destinationStopId": 3,
    "vehicleRouteScheduleId": 5,
    "status": "CANCELLED",
    "createdAt": "2025-10-02T10:30:00Z",
    "updatedAt": "2025-10-02T11:00:00Z",
    "originStop": { ... },
    "destinationStop": { ... },
    "user": { ... },
    "vehicleRouteSchedule": { ... }
  },
  "message": "Booking cancelled successfully"
}
```

#### Error Responses

- **400 Bad Request**: Booking ID is required, or trying to cancel a non-BOOKED booking
- **401 Unauthorized**: Not authenticated
- **403 Forbidden**: Trying to cancel another user's booking without admin role
- **404 Not Found**: Booking not found

---

## Booking Status Enum

- `BOOKED`: Active booking
- `CANCELLED`: User or admin cancelled the booking
- `MISSED`: User missed the scheduled trip
- `COMPLETED`: Trip completed successfully

---

## Business Rules

1. **Capacity Check**: Cannot create booking if vehicle is at full capacity
2. **Duplicate Prevention**: Users cannot have multiple active bookings for the same schedule
3. **Stop Validation**: Origin and destination must be different stops
4. **Schedule Status**: Can only book `UPCOMING` schedules
5. **Edit Restrictions**: Cannot edit `COMPLETED` or `MISSED` bookings
6. **Cancel Restrictions**: Can only cancel `BOOKED` bookings
7. **Permission Check**: Users can only manage their own bookings (except admins)

---

## Example Frontend Integration

### Creating a Booking

```typescript
async function createBooking(data: {
  originStopId: number;
  destinationStopId: number;
  vehicleRouteScheduleId: number;
}) {
  const response = await fetch("/api/booking/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Important for sending cookies
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to create booking");
  }

  return result.data;
}
```

### Getting User Bookings

```typescript
async function getUserBookings(status?: string) {
  const params = new URLSearchParams();
  if (status) params.append("status", status);

  const response = await fetch(`/api/booking/get-all-for-user-id?${params}`, {
    credentials: "include",
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch bookings");
  }

  return result.data.bookings;
}
```

### Cancelling a Booking

```typescript
async function cancelBooking(bookingId: number) {
  const response = await fetch(
    `/api/booking/edit-by-booking-id?bookingId=${bookingId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to cancel booking");
  }

  return result.data;
}
```

---

## Testing

You can test these endpoints using tools like:

- Postman
- cURL
- Thunder Client (VS Code extension)
- Insomnia

Make sure to include the authentication cookie in your requests.

### Example cURL Request

```bash
# Create a booking
curl -X POST http://localhost:3000/api/booking/create \
  -H "Content-Type: application/json" \
  -b "accessToken=your_jwt_token_here" \
  -d '{
    "originStopId": 1,
    "destinationStopId": 3,
    "vehicleRouteScheduleId": 5
  }'
```
