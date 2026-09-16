import { useState } from "react"
import { useDropzone, type FileRejection } from "react-dropzone"
import { format } from "date-fns"
import {
  FileText,
  UploadCloud,
  Upload,
  ExternalLink,
  Replace,
  Trash2,
  Loader2,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ConfirmDialog } from "@/components/ConfirmDialog"
import {
  useUploadDocument,
  useReplaceDocument,
  useDeleteDocument,
} from "@/hooks/useDocuments"
import { fileToBase64, buildStorageFileName } from "@/lib/file"
import type { DocumentType, EmployeeDocument } from "@/types/document"

const ACCEPTED = {
  "application/pdf": [".pdf"],
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
}

const SITE_ORIGIN = "https://automations365.sharepoint.com"

const TILE_STYLES: Record<DocumentType, string> = {
  "Birth Certificate": "bg-periwinkle-surface text-brand-blue",
  "Certificate of Employment": "bg-success-surface text-success",
}

function formatUploadedDate(iso?: string) {
  if (!iso) return null
  const date = new Date(iso)
  return Number.isNaN(date.getTime()) ? null : format(date, "MMM d, yyyy")
}

type DocumentCardProps = {
  employeeCode: string
  employeeName: string
  documentType: DocumentType
  document?: EmployeeDocument
  loading?: boolean
}

export function DocumentCard({
  employeeCode,
  employeeName,
  documentType,
  document,
  loading = false,
}: DocumentCardProps) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const upload = useUploadDocument(employeeCode)
  const replace = useReplaceDocument(employeeCode)
  const del = useDeleteDocument(employeeCode)
  const busy = upload.isPending || replace.isPending || del.isPending

  const saveFile = async (file: File) => {
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
      console.error("Document save failed", err)
      toast.error("Unable to save the document. Please try again.")
    }
  }

  const onDrop = (accepted: File[], rejected: FileRejection[]) => {
    if (rejected.length > 0) {
      toast.error("Unsupported file type. Use PDF, image, or Word.")
      return
    }
    if (accepted[0]) void saveFile(accepted[0])
  }

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED,
    multiple: false,
    disabled: busy,
  })

  const handleView = () => {
    if (!document?.documentUrl) return
    const url = document.documentUrl.startsWith("http")
      ? document.documentUrl
      : SITE_ORIGIN + document.documentUrl
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleDelete = async () => {
    try {
      await del.mutateAsync({ employeeCode, employeeName, documentType })
      toast.success(`${documentType} deleted`)
      setConfirmOpen(false)
    } catch (err) {
      console.error("Document delete failed", err)
      toast.error("Unable to delete the document. Please try again.")
    }
  }

  const uploadedDate = formatUploadedDate(document?.uploadedDate)

  return (
    <div className="rounded-xl border border-fog bg-card p-5 sm:p-6">
      <input {...getInputProps()} />

      <div className="flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-lg ${TILE_STYLES[documentType]}`}>
          <FileText className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-ink-black">{documentType}</h3>
          <p className="text-sm text-iron">Required document</p>
        </div>
      </div>

      {loading ? (
        <Skeleton className="mt-5 h-24 w-full rounded-lg" />
      ) : document ? (
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between gap-3 rounded-lg border border-fog bg-cloud-blue p-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-danger-surface text-danger">
                <FileText className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink-black">{document.fileName}</p>
                {uploadedDate ? (
                  <p className="text-xs text-iron">Uploaded {uploadedDate}</p>
                ) : null}
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-success-surface px-2.5 py-1 text-xs font-medium text-success">
              Uploaded
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={handleView} disabled={busy}>
              <ExternalLink className="h-4 w-4" />
              View
            </Button>
            <Button variant="outline" size="sm" onClick={open} disabled={busy}>
              {replace.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Replace className="h-4 w-4" />
              )}
              Replace
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-danger/30 text-danger hover:bg-danger-surface hover:text-danger"
              onClick={() => setConfirmOpen(true)}
              disabled={busy}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`mt-5 flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed p-6 text-center transition-colors ${
            isDragActive
              ? "border-brand-blue bg-periwinkle-surface"
              : "border-blue-border bg-cloud-blue hover:bg-periwinkle-surface"
          }`}
        >
          <UploadCloud className="h-7 w-7 text-brand-blue" />
          <p className="font-semibold text-ink-black">No document uploaded</p>
          <p className="text-sm text-iron">
            Upload {documentType === "Birth Certificate" ? "a birth certificate" : "a certificate of employment"} for this employee.
          </p>
          <Button
            size="sm"
            className="mt-1 bg-brand-blue text-white hover:bg-deep-blue"
            disabled={busy}
            onClick={(e) => {
              e.stopPropagation()
              open()
            }}
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
