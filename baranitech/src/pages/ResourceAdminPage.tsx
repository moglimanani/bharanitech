import { NavLink, Outlet } from "react-router";
import { UseRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"


export default function ResourceAdminPage() {
  UseRequireUserSession()
  UseRestoreUserSession()

  return (
    <div style={{ padding: '2rem' }}>
      <div>Resources Admin Page</div>
      <nav style={{ padding: '1rem' }}>
        <NavLink to='.'>Resources</NavLink> | <NavLink to={`add`}>Add New</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

