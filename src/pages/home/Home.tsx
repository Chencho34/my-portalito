import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const handleToast = () => toast('Welcome Again Armando!', {
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

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleToast} className=''>notify</button>
      <ToastContainer />
    </div>
  )
}
