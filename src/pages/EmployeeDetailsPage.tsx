import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useEmployee } from "@/hooks/useEmployees"

// Phase 4 builds out employee info + document cards. This stub confirms
// navigation from the Employee Table and resolves the employee by code.
export default function EmployeeDetailsPage() {
  const { employeeCode } = useParams<{ employeeCode: string }>()
  const { data: employee, isLoading, isError } = useEmployee(employeeCode)

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-brand-blue hover:text-deep-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Employees
      </Link>

      {isLoading ? (
        <p className="text-iron">Loading…</p>
      ) : isError || !employee ? (
        <p className="text-iron">Employee not found.</p>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold text-ink-black">{employee.name}</h1>
          <p className="text-iron">{employee.jobTitle}</p>
          <p className="text-iron">{employee.department}</p>
          <p className="text-iron">{employee.employeeCode}</p>
        </div>
      )}
    </div>
  )
}
