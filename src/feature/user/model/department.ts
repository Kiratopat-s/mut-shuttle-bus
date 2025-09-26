export interface Department {
  department_id: string;
  department_name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export interface Employee {
  employee_id: string;
  position: string;
  department_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
