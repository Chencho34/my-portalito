import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const handleToast = () =>
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

  // <div>
  //   <h1>Home</h1>
  //   <button onClick={handleToast} className=''>notify</button>
  //   <ToastContainer />
  // </div>
  return (
    <div className='grid grid-cols-12 gap-4 w-[76%] mx-auto'>
      <div className='col-span-12 md:col-span-12 h-[120px] bg-white shadow p-8 rounded'>
        <section className='flex items-center h-full gap-10'>
          <section className='w-[72px] rounded-full overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
              alt=''
            />
          </section>
          <section>
            <h1>Jose Armando Crescencio Rico</h1>
            <p className='text-sm'>21010001</p>
          </section>
        </section>
      </div>
      <div className='col-span-12 md:col-span-7 h-[300px] bg-white shadow p-8 rounded'>
        <section>
          <h1 className='text-xl'>Personal Information</h1>
          <p className='text-sm'>
            Name: <span>Jose Armando Crescencio Rico</span>
          </p>
          <p className='text-sm'>
            Age: <span>21</span>
          </p>
          <p className='text-sm'>
            Addres: <span>Calle Jose Maria Crescencio S/N</span>
          </p>
          <p className='text-sm'>
            Gmail: <span>test@gmail.com</span>
          </p>
          <p className='text-sm'>
            Tel: <span>272-130-5556</span>
          </p>
          <p className='text-sm'>
            Profile: <span>Estudiante</span>
          </p>
          <p className='text-sm'>
            Bithday: <span>06/30/2002</span>
          </p>
          <p className='text-sm'>
            Genero: <span>Masculino</span>
          </p>
        </section>
      </div>
      <div className='col-span-12 md:col-span-5 h-[300px] bg-white shadow p-8 rounded'>
        Escolar Information
      </div>
    </div>
  )
}
