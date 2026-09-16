import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useEmployee } from "@/hooks/useEmployees"
import { useEmployeeDocuments } from "@/hooks/useDocuments"
import { DocumentCard } from "@/components/DocumentCard"
import { EmployeeAvatar } from "@/components/EmployeeAvatar"
import { Skeleton } from "@/components/ui/skeleton"
import { DOCUMENT_TYPES } from "@/types/document"

export default function EmployeeDetailsPage() {
  const { employeeCode } = useParams<{ employeeCode: string }>()
  const { data: employee, isLoading, isError } = useEmployee(employeeCode)
  const {
    data: documents,
    isLoading: docsLoading,
    isError: docsError,
  } = useEmployeeDocuments(employeeCode)

  const findDocument = (type: (typeof DOCUMENT_TYPES)[number]) =>
    documents?.find((d) => d.documentType === type)

  const metaLine = employee
    ? [employee.employeeCode, employee.jobTitle, employee.department]
        .filter(Boolean)
        .join("  •  ")
    : ""

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-deep-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Employees
      </Link>

      {isLoading ? (
        <Skeleton className="h-28 w-full rounded-xl" />
      ) : isError || !employee ? (
        <p className="text-iron">Employee not found.</p>
      ) : (
        <>
          <div className="flex items-center gap-4 rounded-xl border border-fog bg-periwinkle-surface p-6">
            <EmployeeAvatar name={employee.name} seed={employee.employeeCode} size="lg" />
            <div>
              <h1 className="text-2xl font-semibold text-ink-black">{employee.name}</h1>
              <p className="mt-0.5 text-sm text-graphite">{metaLine}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink-black">Documents</h2>
            <p className="mt-1 text-sm text-iron">
              Manage required documents for this employee.
            </p>
          </div>

          {docsError ? (
            <div className="rounded-xl border border-fog bg-card p-8 text-center text-iron">
              Unable to load documents. Please try again.
            </div>
          ) : (
            <div className="space-y-4">
              {DOCUMENT_TYPES.map((type) => (
                <DocumentCard
                  key={type}
                  employeeCode={employee.employeeCode}
                  employeeName={employee.name}
                  documentType={type}
                  document={findDocument(type)}
                  loading={docsLoading}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
