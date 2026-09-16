import { EmployeesService } from "@/generated/services/EmployeesService";
import type { EmployeesRead } from "@/generated/models/EmployeesModel";
import type { Employee } from "@/types/employee";

function toEmployee(r: EmployeesRead): Employee {
  return {
    id: r.ID ?? 0,
    employeeCode: r.EmployeeCode,
    name: r.Title,
    department: r.Department || undefined,
    jobTitle: r.JobTitle || undefined,
  };
}

export async function getEmployees(): Promise<Employee[]> {
  const result = await EmployeesService.getAll();
  if (!result.success) {
    throw result.error ?? new Error("Failed to load employees");
  }
  return (result.data ?? []).map(toEmployee);
}

export async function getEmployeeByCode(
  employeeCode: string
): Promise<Employee | undefined> {
  // Demo has 5 rows; fetch all and find is simplest and reliable.
  const employees = await getEmployees();
  return employees.find((e) => e.employeeCode === employeeCode);
}
