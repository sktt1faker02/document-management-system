import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getEmployeeDocuments, uploadDocument } from "@/services/documentService"

export function useEmployeeDocuments(employeeCode: string | undefined) {
  return useQuery({
    queryKey: ["documents", employeeCode],
    queryFn: () => getEmployeeDocuments(employeeCode!),
    enabled: !!employeeCode,
  })
}

export function useUploadDocument(employeeCode: string | undefined) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: uploadDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents", employeeCode] })
    },
  })
}
