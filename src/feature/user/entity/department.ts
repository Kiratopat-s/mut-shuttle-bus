export interface Department {
  departmentId: string;
  departmentName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Employee {
  employeeId: string;
  position: string;
  departmentId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
