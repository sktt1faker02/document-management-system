/**
 * Deterministic, collision-proof storage name for a document. The library is
 * flat (one folder), so two files with the same name overwrite each other.
 * Keying the name on EmployeeCode + DocumentType guarantees uniqueness across
 * employees and document types (each employee has one of each type).
 */
export function buildStorageFileName(
  employeeCode: string,
  documentType: string,
  originalName: string
): string {
  const dot = originalName.lastIndexOf(".")
  const ext = dot >= 0 ? originalName.slice(dot) : ""
  return `${employeeCode}-${documentType}${ext}`
}

/** Reads a File as base64 (without the `data:...;base64,` prefix). */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      resolve(result.split(",")[1] ?? "")
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}
