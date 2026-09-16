import { useNavigate } from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import type { Employee } from "@/types/employee"

type EmployeeTableProps = {
  employees: Employee[]
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  const navigate = useNavigate()

  const open = (employeeCode: string) => navigate(`/employees/${employeeCode}`)

  return (
    <div className="rounded-xl border border-fog bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-cloud-blue hover:bg-cloud-blue">
            <TableHead className="text-graphite font-semibold">Employee Code</TableHead>
            <TableHead className="text-graphite font-semibold">Employee Name</TableHead>
            <TableHead className="text-graphite font-semibold">Job Title</TableHead>
            <TableHead className="text-graphite font-semibold">Department</TableHead>
            <TableHead className="text-graphite font-semibold text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.employeeCode}
              onClick={() => open(employee.employeeCode)}
              className="cursor-pointer hover:bg-cloud-blue"
            >
              <TableCell className="font-medium text-graphite">{employee.employeeCode}</TableCell>
              <TableCell className="font-semibold text-ink-black">{employee.name}</TableCell>
              <TableCell className="text-graphite">{employee.jobTitle ?? "—"}</TableCell>
              <TableCell className="text-graphite">{employee.department ?? "—"}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-brand-blue hover:text-deep-blue hover:bg-periwinkle-surface"
                  onClick={(e) => {
                    e.stopPropagation()
                    open(employee.employeeCode)
                  }}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
