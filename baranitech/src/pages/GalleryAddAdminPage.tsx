import { Link, NavLink, Outlet } from "react-router";
import GalleryList, { GalleryItem } from "../components/GalleryList";
import { UseRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"
import GalleryAdminAddForm from "../components/GalleryAdminAddComponent";


export default function GalleryAddAdminPage() {
  UseRequireUserSession()
  UseRestoreUserSession()

  return (
    <div style={{ padding: '2rem' }}>
        <GalleryAdminAddForm />
    </div>
  )
}

