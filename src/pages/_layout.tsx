import { NavLink, Outlet } from "react-router-dom"
import { Users } from "lucide-react"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-white/15 text-white"
      : "text-white/75 hover:bg-white/10 hover:text-white"
  }`

function SidebarWave() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full text-white/10"
      viewBox="0 0 256 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 70 C 60 40 100 100 160 70 S 256 40 256 60 L 256 120 L 0 120 Z"
        fill="currentColor"
      />
      <path
        d="M0 90 C 70 70 120 110 180 88 S 256 70 256 84 L 256 120 L 0 120 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Layout() {
  return (
    <div className="min-h-dvh flex bg-background">
      <aside className="relative hidden overflow-hidden bg-brand-blue md:flex md:w-64 md:shrink-0 md:flex-col">
        <div className="flex h-20 items-center px-6">
          <img
            src="/automations365-logo.webp"
            className="h-12 w-auto object-contain"
            alt="Automations 365"
          />
        </div>
        <nav className="px-3 py-4">
          <NavLink to="/" end className={navLinkClass}>
            <Users className="h-4 w-4" />
            Employees
          </NavLink>
        </nav>
        <SidebarWave />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center bg-brand-blue px-6 md:hidden">
          <img
            src="/automations365-logo.webp"
            className="h-10 w-auto object-contain"
            alt="Automations 365"
          />
        </header>
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
