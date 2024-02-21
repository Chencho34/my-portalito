import { Outlet } from 'react-router-dom'
import { Footer, Nav, Wrapper } from '../../components'
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
      <Wrapper>
        <Outlet />
        <ToastContainer />
      </Wrapper>
      <Footer />
    </>
  )
}
