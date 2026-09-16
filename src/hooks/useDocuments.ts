import { useQuery } from "@tanstack/react-query"
import { getEmployeeDocuments } from "@/services/documentService"

export function useEmployeeDocuments(employeeCode: string | undefined) {
  return useQuery({
    queryKey: ["documents", employeeCode],
    queryFn: () => getEmployeeDocuments(employeeCode!),
    enabled: !!employeeCode,
  })
}
