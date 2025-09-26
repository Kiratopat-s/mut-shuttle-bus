import { Role } from "../enum/role";

export interface User {
  userId: string;
  fistName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
