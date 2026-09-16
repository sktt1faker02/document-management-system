import { FileText, Upload, Eye, Replace, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { DocumentType, EmployeeDocument } from "@/types/document"

type DocumentCardProps = {
  documentType: DocumentType
  document?: EmployeeDocument
}

// Actions are intentionally disabled in Phase 4 — Upload lands in Phase 5,
// View/Replace/Delete in Phase 6. This card only reflects document state.
export function DocumentCard({ documentType, document }: DocumentCardProps) {
  return (
    <div className="rounded-xl border border-fog bg-card p-6">
      <h3 className="text-lg font-semibold text-ink-black">{documentType}</h3>

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
            disabled
          >
            <Upload className="h-4 w-4" />
            Upload Document
          </Button>
        </div>
      )}
    </div>
  )
}
