import { ApiService } from "./services/ApiService";
import { EmployeeService } from "./services/EmployeeService";

async function main(): Promise<void> {
  try {
    const apiService = new ApiService();
    const employeeService = new EmployeeService(apiService);

    await employeeService.loadEmployeesFromApi();

    console.log("=== SISTEMA DE EMPLEADOS ===");
    employeeService.getAllEmployees().forEach(emp => {
      console.log(emp.getDetails(), " | Salario:", emp.calculateSalary());
    });
  } catch (error) {
    console.error("Error en main:", error);
  }
}

main();
