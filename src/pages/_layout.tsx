import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <header className="h-16 bg-card border-b border-fog">
        <div className="mx-auto w-full max-w-7xl px-6 h-full flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/automations365-logo.webp"
              alt="Automations 365"
              className="h-8 w-auto"
            />
            <span className="sr-only">HR Document Management</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
