import { useRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"

export default function AdminPage() {
  useRequireUserSession()
  UseRestoreUserSession()
  
  return (
    <div>AdminPage</div>
  )
}
