import { Outlet } from 'react-router-dom'
import { Footer, Nav } from '../../components'

export default function PublicLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}
