import { Outlet } from 'react-router-dom'
import { Nav } from '../../components'

export default function PublicLayout() {
  return (
    <div>
      <Nav/>
      <Outlet />
    </div>
  )
}
