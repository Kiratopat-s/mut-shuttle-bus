import { Role } from "../enum/role";

export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: Role;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
