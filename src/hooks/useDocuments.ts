import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  getEmployeeDocuments,
  uploadDocument,
  replaceDocument,
  deleteDocument,
} from "@/services/documentService"

export function useEmployeeDocuments(employeeCode: string | undefined) {
  return useQuery({
    queryKey: ["documents", employeeCode],
    queryFn: () => getEmployeeDocuments(employeeCode!),
    enabled: !!employeeCode,
  })
}

function useDocumentMutation<TInput>(
  employeeCode: string | undefined,
  mutationFn: (input: TInput) => Promise<void>
) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents", employeeCode] })
    },
  })
}

export function useUploadDocument(employeeCode: string | undefined) {
  return useDocumentMutation(employeeCode, uploadDocument)
}

export function useReplaceDocument(employeeCode: string | undefined) {
  return useDocumentMutation(employeeCode, replaceDocument)
}

export function useDeleteDocument(employeeCode: string | undefined) {
  return useDocumentMutation(employeeCode, deleteDocument)
}
