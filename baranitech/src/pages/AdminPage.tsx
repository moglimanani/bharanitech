import { UseRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"

export default function AdminPage() {
  UseRequireUserSession()
  UseRestoreUserSession()
  
  return (
    <div>AdminPage</div>
  )
}
