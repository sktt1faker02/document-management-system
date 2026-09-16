import { EmployeeDocumentsService } from "@/generated/services/EmployeeDocumentsService";
import { EmployeeDocumentActionService } from "@/generated/services/EmployeeDocumentActionService";
import type { EmployeeDocumentsRead } from "@/generated/models/EmployeeDocumentsModel";
import type { DocumentType, EmployeeDocument } from "@/types/document";

function toDocument(r: EmployeeDocumentsRead): EmployeeDocument {
  return {
    id: r.ID ?? 0,
    employeeCode: r.EmployeeCode,
    employeeName: r.EmployeeName || undefined,
    documentType: r.DocumentType?.Value as DocumentType,
    fileName: r["{FilenameWithExtension}"] ?? r["{Name}"] ?? "",
    documentUrl: r["{Link}"] ?? "",
    identifier: r["{Identifier}"],
  };
}

export async function getEmployeeDocuments(
  employeeCode: string
): Promise<EmployeeDocument[]> {
  const result = await EmployeeDocumentsService.getAll();
  if (!result.success) {
    throw result.error ?? new Error("Failed to load documents");
  }
  return (result.data ?? [])
    .map(toDocument)
    .filter((d) => d.employeeCode === employeeCode);
}

export interface UploadDocumentInput {
  employeeCode: string;
  employeeName: string;
  documentType: DocumentType;
  fileName: string;
  fileContentBase64: string;
}

// Wraps the EmployeeDocumentAction Power Automate flow. The generated input
// uses positional schema keys (text..text_5); see EmployeeDocumentActionModel.
export async function uploadDocument(input: UploadDocumentInput): Promise<void> {
  const result = await EmployeeDocumentActionService.Run({
    text: "UPLOAD",
    text_1: input.employeeCode,
    text_2: input.employeeName,
    text_3: input.documentType,
    text_4: input.fileName,
    text_5: input.fileContentBase64,
  });
  if (!result.success || result.data?.status !== "SUCCESS") {
    throw new Error(result.error?.message ?? "Upload failed");
  }
}
