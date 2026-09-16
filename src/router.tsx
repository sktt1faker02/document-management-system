import { createBrowserRouter } from "react-router-dom"
import Layout from "@/pages/_layout"
import EmployeesPage from "@/pages/EmployeesPage"
import EmployeeDetailsPage from "@/pages/EmployeeDetailsPage"
import NotFoundPage from "@/pages/not-found"

// IMPORTANT: Do not remove or modify the code below!
// Normalize basename when hosted in Power Apps
const BASENAME = new URL(".", location.href).pathname
if (location.pathname.endsWith("/index.html")) {
  history.replaceState(null, "", BASENAME + location.search + location.hash);
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <EmployeesPage /> },
      { path: "employees/:employeeCode", element: <EmployeeDetailsPage /> },
    ],
  },
], { 
  basename: BASENAME // IMPORTANT: Set basename for proper routing when hosted in Power Apps
})