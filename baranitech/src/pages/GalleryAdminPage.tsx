import { Link, NavLink, Outlet } from "react-router";
import GalleryList, { GalleryItem } from "../components/GalleryList";
import { UseRequireUserSession } from "../hooks/useRequireUserSession"
import { UseRestoreUserSession } from "../hooks/useRestoreUserSession"

const mockItems: GalleryItem[] = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Gallery Item ${index + 1}`,
  imageUrl: `https://source.unsplash.com/random/400x300?sig=${index + 1}`,
}));

export default function GalleryAdminPage() {
  UseRequireUserSession()
  UseRestoreUserSession()

  return (
    <div style={{ padding: '2rem' }}>
      <div>GalleryAdminPage</div>
      <nav style={{ padding: '1rem' }}>
        <NavLink to='.'>Gallery</NavLink> | <NavLink to={`add`}>Add New</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

