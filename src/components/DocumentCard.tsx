import { useRef, type ChangeEvent } from "react"
import { FileText, Upload, Eye, Replace, Trash2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useUploadDocument } from "@/hooks/useDocuments"
import { fileToBase64 } from "@/lib/file"
import type { DocumentType, EmployeeDocument } from "@/types/document"

const ACCEPTED_FILES = ".pdf,.png,.jpg,.jpeg,.doc,.docx"

type DocumentCardProps = {
  employeeCode: string
  employeeName: string
  documentType: DocumentType
  document?: EmployeeDocument
}

// View/Replace/Delete remain disabled until Phase 6. Upload is wired to the
// EmployeeDocumentAction flow via useUploadDocument.
export function DocumentCard({
  employeeCode,
  employeeName,
  documentType,
  document,
}: DocumentCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const upload = useUploadDocument(employeeCode)

  const handleFileSelected = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = "" // allow re-selecting the same file later
    if (!file) return
    try {
      const fileContentBase64 = await fileToBase64(file)
      await upload.mutateAsync({
        employeeCode,
        employeeName,
        documentType,
        fileName: file.name,
        fileContentBase64,
      })
      toast.success(`${documentType} uploaded`)
    } catch (err) {
      console.error("Document upload failed", err)
      toast.error("Unable to upload the document. Please try again.")
    }
  }

  return (
    <div className="rounded-xl border border-fog bg-card p-6">
      <h3 className="text-lg font-semibold text-ink-black">{documentType}</h3>

      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTED_FILES}
        className="hidden"
        onChange={handleFileSelected}
      />

      {document ? (
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-2 text-graphite">
            <FileText className="h-5 w-5 text-brand-blue shrink-0" />
            <span className="text-sm break-all">{document.fileName}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" disabled>
              <Eye className="h-4 w-4" />
              View
            </Button>
            <Button variant="outline" size="sm" disabled>
              <Replace className="h-4 w-4" />
              Replace
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-danger hover:text-danger hover:bg-danger-surface"
              disabled
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-lg bg-periwinkle-surface">
              <FileText className="h-5 w-5 text-brand-blue" />
            </span>
            <span className="text-sm text-iron">No document uploaded</span>
          </div>
          <Button
            size="sm"
            className="bg-brand-blue text-white hover:bg-deep-blue"
            disabled={upload.isPending}
            onClick={() => fileInputRef.current?.click()}
          >
            {upload.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading…
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Upload Document
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
