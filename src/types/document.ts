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
  /** SharePoint item identifier, used later for replace/delete via Power Automate. */
  identifier?: string;
}
