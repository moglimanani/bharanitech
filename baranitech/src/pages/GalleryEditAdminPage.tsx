import { UseRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"

export default function GalleryEditAdminPage() {
  UseRequireUserSession()
  UseRestoreUserSession()

  return (
    <div style={{ padding: '2rem' }}>
      Edit page
    </div>
  )
}

