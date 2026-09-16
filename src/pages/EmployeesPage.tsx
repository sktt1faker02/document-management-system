import { useMemo, useState } from "react"
import { Search, FileText } from "lucide-react"
import { useEmployees } from "@/hooks/useEmployees"
import { EmployeeTable } from "@/components/EmployeeTable"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

export default function EmployeesPage() {
  const { data: employees, isLoading, isError } = useEmployees()
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const list = employees ?? []
    const q = query.trim().toLowerCase()
    if (!q) return list
    return list.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.employeeCode.toLowerCase().includes(q)
    )
  }, [employees, query])

  return (
    <div className="space-y-6">
      <div>
        <p className="flex items-center gap-1.5 text-sm font-medium text-iron">
          <FileText className="h-4 w-4" />
          HR Document Management
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-ink-black">Employees</h1>
        <p className="mt-1 text-sm text-iron">Manage employee records and HR documents.</p>
      </div>

      <div className="rounded-xl border border-fog bg-card p-4 sm:p-5">
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-iron" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or employee code..."
            className="pl-9"
            aria-label="Search employees"
          />
        </div>

        {isLoading ? (
          <div className="space-y-3 p-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-lg border border-fog bg-cloud-blue p-8 text-center text-iron">
            Unable to load employees. Please try again.
          </div>
        ) : filtered.length > 0 ? (
          <EmployeeTable employees={filtered} />
        ) : (
          <div className="rounded-lg border border-fog bg-cloud-blue p-8 text-center text-iron">
            No employees match your search.
          </div>
        )}
      </div>

      {!isLoading && !isError ? (
        <p className="text-sm text-iron">Showing {filtered.length} employees</p>
      ) : null}
    </div>
  )
}
