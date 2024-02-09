import { Outlet } from 'react-router-dom'
import { Footer, Nav } from '../../components'

export default function PublicLayout() {
  return (
    <>
      <Nav />
      <main className='h-[calc(100vh-64px)] flex items-center bg-slate-200'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
