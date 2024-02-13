import { Outlet } from 'react-router-dom'
import { Footer, Nav } from '../../components'
import { useEffect } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PublicLayout() {

  const handleToast = () => {
    toast('Welcome Again Armando!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    })
  }

  useEffect(() => {
    handleToast()
  }, [])

  return (
    <>
      <Nav />
        <main className='h-[calc(100vh-64px)] bg-hero-login flex items-center bg-slate-200'>
          <Outlet />
          <ToastContainer />
        </main>
      <Footer />
    </>
  )
}
