import { useRequireUserSession } from "../hooks/useRequireUserSession"

export default function AdminPage() {
  useRequireUserSession()
  
  return (
    <div>AdminPage</div>
  )
}
