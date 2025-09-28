import { BaseEmployee } from "./BaseEmployee";
import { User, Department } from "../interfaces/types";

export class Developer extends BaseEmployee {
  private programmingLanguages: string[];

  constructor(user: User, id: number, languages: string[]) {
    super(user, id, Department.IT); 
    this.programmingLanguages = languages;
  }

  getDetails(): string {
    return `👨‍💻 Developer [${this.id}] - ${this.name}, ${this.age} años, Email: ${this.email}, Lenguajes: ${this.programmingLanguages.join(", ")}`;
  }

  calculateSalary(): number {
    return 3000 + this.programmingLanguages.length * 200;
  }
}
