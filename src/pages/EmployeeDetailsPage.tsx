import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useEmployee } from "@/hooks/useEmployees"
import { useEmployeeDocuments } from "@/hooks/useDocuments"
import { DocumentCard } from "@/components/DocumentCard"
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

  return (
    <div className="space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-deep-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Employees
      </Link>

      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-4 w-40" />
        </div>
      ) : isError || !employee ? (
        <p className="text-iron">Employee not found.</p>
      ) : (
        <>
          <div>
            <h1 className="text-3xl font-semibold text-ink-black">{employee.name}</h1>
            <p className="text-iron mt-1">{employee.jobTitle ?? "—"}</p>
            <p className="text-iron">{employee.department ?? "—"}</p>
            <p className="text-iron">{employee.employeeCode}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-ink-black">Documents</h2>

            {docsLoading ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <Skeleton className="h-40 w-full rounded-xl" />
                <Skeleton className="h-40 w-full rounded-xl" />
              </div>
            ) : docsError ? (
              <div className="rounded-xl border border-fog bg-card p-8 text-center text-iron">
                Unable to load documents. Please try again.
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {DOCUMENT_TYPES.map((type) => (
                  <DocumentCard
                    key={type}
                    employeeCode={employee.employeeCode}
                    employeeName={employee.name}
                    documentType={type}
                    document={findDocument(type)}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
