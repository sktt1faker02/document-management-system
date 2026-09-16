import { EmployeeDocumentsService } from "@/generated/services/EmployeeDocumentsService";
import type { EmployeeDocumentsRead } from "@/generated/models/EmployeeDocumentsModel";
import type { DocumentType, EmployeeDocument } from "@/types/document";

function toDocument(r: EmployeeDocumentsRead): EmployeeDocument {
  return {
    id: r.ID ?? 0,
    employeeCode: r.EmployeeCode,
    employeeName: r.EmployeeName || undefined,
    documentType: r.DocumentType?.Value as DocumentType,
    fileName: r["{Name}"] ?? r["{FilenameWithExtension}"] ?? "",
    documentUrl: r["{Link}"] ?? "",
    identifier: r["{Identifier}"],
  };
}

export async function getEmployeeDocuments(
  employeeCode: string
): Promise<EmployeeDocument[]> {
  const result = await EmployeeDocumentsService.getAll();
  return (result.data ?? [])
    .map(toDocument)
    .filter((d) => d.employeeCode === employeeCode);
}
