import { FaInstagram, FaLock, FaSquareFacebook, FaUser, FaXTwitter } from 'react-icons/fa6'
import { LuLogIn } from 'react-icons/lu'
import { Input, Modal } from '../../components'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

export default function Login (): JSX.Element {  


  const navigate = useNavigate()
  const [dataForm, setDataForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    console.log(e.target)
    setDataForm({...dataForm, [name]: value})
  }

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(dataForm)
    navigate('/')
  }

  const [ modal, setModal] = useState(false)

  const handleModal = () => {
    console.log('click' , modal)
    setModal(!modal)
  }

  return (
    <main className='grid grid-flow-row grid-cols-12 h-screen'>
      <article className='hidden md:grid md:col-span-5 bg-hero-login bg-cover bg-no-repeat object-cover'>
        <section className='grid bg-slate-100 place-content-end text-white h-full bg-gradient-to-t from-[rgb(33,33,33,.9)] to-[rgb(33,33,33,.4)] bg-transparent p-8 overflow-hidden'>
          <p className='flex flex-col text-wrap text-5xl tracking-[2px] leading-tight mb-6 font-medium overflow-hidden text-left'>
            <span className=''>Hello,</span> 
            <span className=''>Welcome!</span>
            <span className=''>To</span>
            <span className='font-semibold text-[rgb(83,142,197)]'>MyPortal ITO</span>
          </p>
          <p className='text-xs leading-snug text-gray-300 tracking-wider mb-6 line-clamp-6 text-pretty'>
            You are currently on the login page, which grants you access to your school information, className schedules, and academic records (kardex). Enter your credentials to log in and access your personal dashboard where you can view your academic details. Once logged in, youll be able to check your className schedules to know when and where your classes are held.
          </p>
          <button onClick={handleModal} type='button' className='w-[140px] py-2 rounded border-2 border-neutral-50  text-sm font-normal  leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100'>
            Get started
          </button>
        </section>
      </article>
      <article className='grid md:col-span-7 col-span-12 bg-slate-200 relative'>
        <nav className='flex items-center w-full h-20 absolute top-0 right-0 left-0'>
          <section className='flex items-center justify-between h-full w-[80%] mx-auto'>
            <h1 className='text-[#26418f] font-bold text-2xl'>MyPortal ITO</h1>
            <ul className='hidden md:flex gap-6 text-sm font-medium'>
              <li><a href='#'><FaSquareFacebook size={21} color='#212121' /></a></li>
              <li><a href='#'><FaInstagram size={21} color='#212121' /></a></li>
              <li><a href='#'><FaXTwitter size={21} color='#212121' /></a></li>
            </ul>
          </section>
        </nav>
        <article className='flex flex-col items-center justify-center'>
          <form className='flex flex-col gap-4 bg-white rounded-lg shadow-lg p-8 w-full max-w-xs' onSubmit={handleSubmit}>
            <h2 className='text-4xl font-bold text-center text-[#212121]'>Login</h2>
            <p className='text-sm '>Log in to your account</p>
            <label className='relative flex items-center' htmlFor='username'>
              <Input id='username' name='username' type='text' placeholder='Username' value={dataForm.username}  onChange={handleChange} />
              <FaUser className='absolute right-3' size={14} color='#212121' />
            </label>
            <label className='relative flex items-center' htmlFor='password'>
              <Input id='password' name='password' type='password' placeholder='Password' value={dataForm.password} onChange={handleChange}/>
              <FaLock className='absolute right-3' size={14} color='#212121' />
            </label>
            <a className='text-sm hover:text-blue-700 text-blue-400 ml-2 w-max'href='#'>
              Forgot your password?
            </a>
            <button className='text-[#fafafa] flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors bg-[#26418f] h-10 px-4 py-2 w-full hover:bg-[#212121]' type='submit'>
              Log In <LuLogIn size={14} />
            </button>
            <div  className='md:hidden h-[1px] bg-slate-300 w-[90%] mx-auto'/>
            <ul className='md:hidden flex justify-around bg-slate-5  rounded gap-6 text-sm font-medium'>
              <li><a href='#'><FaSquareFacebook size={20} color='#212121' /></a></li>
              <li><a href='#'><FaInstagram size={20} color='#212121' /></a></li>
              <li><a href='#'><FaXTwitter size={20} color='#212121' /></a></li>
            </ul>
          </form>
        </article>
        <footer className='grid place-items-center bg-cyan- w-full h-14 absolute bottom-0'>
          <p className='text-xs font-medium text-[#212121]'>© 04/02/2024 Copyright <span className='text-blue-700'>MyPortalITO</span>: By Chencho</p>          
        </footer>
      </article>
      {
        modal && <Modal handleClick={handleModal}></Modal>
      }
    </main>
  )
}
