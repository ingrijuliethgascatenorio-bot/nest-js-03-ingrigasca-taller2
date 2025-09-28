import { BaseEmployee } from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

export class Manager extends BaseEmployee {
  private teamSize: number;

  constructor(user: User, id: number, department: Department, teamSize: number) {
    super(user, id, department);
    this.teamSize = teamSize;
  }

  getDetails(): string {
    return `Manager: ${this.name}, Equipo: ${this.teamSize} personas, Dept: ${this.department}`;
  }

  calculateSalary(): number {
    return 4000 + this.teamSize * 300;
  }
}
