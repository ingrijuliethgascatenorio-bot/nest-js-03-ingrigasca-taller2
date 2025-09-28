// src/interfaces/types.ts
export interface User {
  name: string;
  age: number;
  email: string;
  gender: string;
}

export enum Department {
  IT = "IT",
  HR = "HR",
  SALES = "SALES",
  MARKETING = "MARKETING",
}

export interface Employee extends User {
  id: number;
  position: string;
  department: Department;
  salary: number;
}
