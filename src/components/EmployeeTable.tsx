import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight, ChevronsUpDown, ChevronUp, ChevronDown } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { EmployeeAvatar } from "@/components/EmployeeAvatar"
import type { Employee } from "@/types/employee"

type SortKey = "employeeCode" | "name" | "jobTitle" | "department"
type SortDir = "asc" | "desc"

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "employeeCode", label: "Employee Code" },
  { key: "name", label: "Employee Name" },
  { key: "jobTitle", label: "Job Title" },
  { key: "department", label: "Department" },
]

export function EmployeeTable({ employees }: { employees: Employee[] }) {
  const navigate = useNavigate()
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir } | null>(null)

  const open = (employeeCode: string) => navigate(`/employees/${employeeCode}`)

  const toggleSort = (key: SortKey) =>
    setSort((prev) =>
      prev?.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    )

  const sorted = useMemo(() => {
    if (!sort) return employees
    const dir = sort.dir === "asc" ? 1 : -1
    return [...employees].sort(
      (a, b) => (a[sort.key] ?? "").localeCompare(b[sort.key] ?? "") * dir
    )
  }, [employees, sort])

  return (
    <div className="overflow-hidden rounded-xl border border-fog">
      <Table>
        <TableHeader>
          <TableRow className="bg-cloud-blue hover:bg-cloud-blue">
            {COLUMNS.map((col) => {
              const active = sort?.key === col.key
              const Icon = !active ? ChevronsUpDown : sort.dir === "asc" ? ChevronUp : ChevronDown
              return (
                <TableHead key={col.key} className="text-graphite">
                  <button
                    type="button"
                    onClick={() => toggleSort(col.key)}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide hover:text-brand-blue"
                  >
                    {col.label}
                    <Icon className={`h-3.5 w-3.5 ${active ? "text-brand-blue" : "text-iron"}`} />
                  </button>
                </TableHead>
              )
            })}
            <TableHead className="text-xs font-semibold uppercase tracking-wide text-graphite">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((employee) => (
            <TableRow
              key={employee.employeeCode}
              onClick={() => open(employee.employeeCode)}
              className="cursor-pointer hover:bg-cloud-blue"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <EmployeeAvatar name={employee.name} seed={employee.employeeCode} />
                  <span className="font-medium text-graphite">{employee.employeeCode}</span>
                </div>
              </TableCell>
              <TableCell className="font-semibold text-ink-black">{employee.name}</TableCell>
              <TableCell className="text-graphite">{employee.jobTitle ?? "—"}</TableCell>
              <TableCell className="text-graphite">{employee.department ?? "—"}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-brand-blue"
                    onClick={(e) => {
                      e.stopPropagation()
                      open(employee.employeeCode)
                    }}
                  >
                    View
                  </Button>
                  <ChevronRight className="h-4 w-4 text-iron" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
