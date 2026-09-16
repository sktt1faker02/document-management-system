import { useQuery } from "@tanstack/react-query"
import { getEmployees, getEmployeeByCode } from "@/services/employeeService"

export function useEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  })
}

export function useEmployee(employeeCode: string | undefined) {
  return useQuery({
    queryKey: ["employee", employeeCode],
    queryFn: () => getEmployeeByCode(employeeCode!),
    enabled: !!employeeCode,
  })
}
