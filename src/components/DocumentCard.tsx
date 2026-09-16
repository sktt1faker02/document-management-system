import { useRef, useState, type ChangeEvent } from "react"
import { FileText, Upload, Eye, Replace, Trash2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { ConfirmDialog } from "@/components/ConfirmDialog"
import {
  useUploadDocument,
  useReplaceDocument,
  useDeleteDocument,
} from "@/hooks/useDocuments"
import { fileToBase64, buildStorageFileName } from "@/lib/file"
import type { DocumentType, EmployeeDocument } from "@/types/document"

const ACCEPTED_FILES = ".pdf,.png,.jpg,.jpeg,.doc,.docx"
const SITE_ORIGIN = "https://automations365.sharepoint.com"

type DocumentCardProps = {
  employeeCode: string
  employeeName: string
  documentType: DocumentType
  document?: EmployeeDocument
}

export function DocumentCard({
  employeeCode,
  employeeName,
  documentType,
  document,
}: DocumentCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const upload = useUploadDocument(employeeCode)
  const replace = useReplaceDocument(employeeCode)
  const del = useDeleteDocument(employeeCode)
  const busy = upload.isPending || replace.isPending || del.isPending

  const handleFileSelected = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = "" // allow re-selecting the same file later
    if (!file) return
    try {
      const fileContentBase64 = await fileToBase64(file)
      const fileName = buildStorageFileName(employeeCode, documentType, file.name)
      const common = { employeeCode, employeeName, documentType, fileName, fileContentBase64 }
      if (document) {
        await replace.mutateAsync(common)
        toast.success(`${documentType} replaced`)
      } else {
        await upload.mutateAsync(common)
        toast.success(`${documentType} uploaded`)
      }
    } catch (err) {
      console.error("Document upload failed", err)
      toast.error("Unable to save the document. Please try again.")
    }
  }

  const handleView = () => {
    if (!document?.documentUrl) return
    const url = document.documentUrl.startsWith("http")
      ? document.documentUrl
      : SITE_ORIGIN + document.documentUrl
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleDelete = async () => {
    if (!document) return
    try {
      await del.mutateAsync({ employeeCode, employeeName, documentType })
      toast.success(`${documentType} deleted`)
      setConfirmOpen(false)
    } catch (err) {
      console.error("Document delete failed", err)
      toast.error("Unable to delete the document. Please try again.")
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
            <Button variant="outline" size="sm" onClick={handleView} disabled={busy}>
              <Eye className="h-4 w-4" />
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={busy}
            >
              {replace.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Replace className="h-4 w-4" />
              )}
              Replace
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-danger hover:text-danger hover:bg-danger-surface"
              onClick={() => setConfirmOpen(true)}
              disabled={busy}
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
            disabled={busy}
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

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title={`Delete ${documentType}?`}
        description="Are you sure you want to delete this document? This action cannot be undone."
        confirmLabel="Delete"
        loading={del.isPending}
        onConfirm={handleDelete}
      />
    </div>
  )
}
