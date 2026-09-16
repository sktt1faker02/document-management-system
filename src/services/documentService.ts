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

// Wraps the EmployeeDocumentAction Power Automate flow. The generated input
// uses positional schema keys (text..text_5); see EmployeeDocumentActionModel:
// text=Action, text_1=EmployeeCode, text_2=EmployeeName, text_3=DocumentType,
// text_4=FileName, text_5=FileContent (base64).
//
// The flow finds the target file itself by EmployeeCode + DocumentType, so
// REPLACE/DELETE never depend on a client-supplied item id (which could point
// at the wrong document and cause data loss).
type DocumentAction = "UPLOAD" | "REPLACE" | "DELETE";

async function runDocumentAction(fields: {
  action: DocumentAction;
  employeeCode: string;
  employeeName: string;
  documentType: DocumentType;
  fileName: string;
  fileContentBase64: string;
}): Promise<void> {
  const result = await EmployeeDocumentActionService.Run({
    text: fields.action,
    text_1: fields.employeeCode,
    text_2: fields.employeeName,
    text_3: fields.documentType,
    text_4: fields.fileName,
    text_5: fields.fileContentBase64,
  });
  if (!result.success || result.data?.status !== "SUCCESS") {
    throw new Error(result.error?.message ?? `${fields.action} failed`);
  }
}

export interface UploadDocumentInput {
  employeeCode: string;
  employeeName: string;
  documentType: DocumentType;
  fileName: string;
  fileContentBase64: string;
}

export async function uploadDocument(input: UploadDocumentInput): Promise<void> {
  await runDocumentAction({ ...input, action: "UPLOAD" });
}

export async function replaceDocument(input: UploadDocumentInput): Promise<void> {
  await runDocumentAction({ ...input, action: "REPLACE" });
}

export interface DeleteDocumentInput {
  employeeCode: string;
  employeeName: string;
  documentType: DocumentType;
}

export async function deleteDocument(input: DeleteDocumentInput): Promise<void> {
  await runDocumentAction({
    ...input,
    action: "DELETE",
    fileName: "",
    fileContentBase64: "",
  });
}
