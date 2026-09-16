import { useEmployees } from "@/hooks/useEmployees"
import { EmployeeTable } from "@/components/EmployeeTable"
import { Skeleton } from "@/components/ui/skeleton"

export default function EmployeesPage() {
  const { data: employees, isLoading, isError } = useEmployees()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-ink-black">Employees</h1>
        <p className="text-sm text-iron mt-1">
          Select an employee to manage their HR documents.
        </p>
      </div>

      {isLoading ? (
        <div className="rounded-xl border border-fog bg-card p-4 space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      ) : isError ? (
        <div className="rounded-xl border border-fog bg-card p-8 text-center text-iron">
          Unable to load employees. Please try again.
        </div>
      ) : employees && employees.length > 0 ? (
        <EmployeeTable employees={employees} />
      ) : (
        <div className="rounded-xl border border-fog bg-card p-8 text-center text-iron">
          No employees found.
        </div>
      )}
    </div>
  )
}
