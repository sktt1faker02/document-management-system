export type DocumentType = "Birth Certificate" | "Certificate of Employment";

export const DOCUMENT_TYPES: DocumentType[] = [
  "Birth Certificate",
  "Certificate of Employment",
];

export interface EmployeeDocument {
  id: number;
  employeeCode: string;
  employeeName?: string;
  documentType: DocumentType;
  fileName: string;
  documentUrl: string;
  /** ISO date the file was created in SharePoint. */
  uploadedDate?: string;
}
