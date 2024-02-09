import { FaInstagram, FaLock, FaSquareFacebook, FaUser, FaXTwitter } from 'react-icons/fa6'
import { LuLogIn } from 'react-icons/lu'
import { Input } from '../../components'
import { CgClose, CgMenuRightAlt } from 'react-icons/cg'
import { useState } from 'react'
export default function Login (): JSX.Element {
  const [ toggleNav, setToggleNav] = useState(false)
  const handleSideNav = () => setToggleNav(!toggleNav)
  

  return (
    <main className='grid grid-flow-row grid-cols-12 h-screen'>
      <article className='hidden md:grid md:col-span-5 bg-hero-login bg-cover bg-no-repeat object-cover'>
        <section className='grid place-content-end text-white h-full bg-gradient-to-t from-[rgb(33,33,33,.9)] to-[rgb(33,33,33,.4)] bg-transparent p-8'>
          <h1 className='text-5xl tracking-[2px] leading-tight mb-6 font-bold'>
            Wellcome Again! To{' '}
            <span className='text-[#9811c5]'>MyPortalITO</span>
          </h1>
          <p className='text-sm leading-snug font-normal text-gray-300 tracking-wider mb-6'>
            You are currently on the login page, which grants you access to your
            school information, className schedules, and academic records
            (kardex). Enter your credentials to log in and access your personal
            dashboard where you can view your academic details. Once logged in,
            youll be able to check your className schedules to know when and
            where your classes are held.
          </p>
          <button
            type='button'
            className='w-[140px] py-2 rounded border-2 border-neutral-50  text-sm font-normal  leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100'
          >
            Get started
          </button>
        </section>
      </article>
      <article className='grid md:col-span-7 place-items-center col-span-12  bg-slate-200 relative'>
        <nav className='flex items-center w-full h-14 absolute top-0'>
          <section className='flex items-center justify-between h-full w-[80%] mx-auto '>
            <h1 className='text-[#9811c5] font-bold text-2xl'>MyPortalITO</h1>
            <ul className='flex gap-6 text-sm font-medium'>
              <li>
                <FaSquareFacebook size={19} color='#212121' />
              </li>
              <li>
                <FaInstagram size={19} color='#212121' />
              </li>
              <li>
                <FaXTwitter size={19} color='#212121' />
              </li>
            </ul>
            {/* <CgMenuRightAlt className='cursor-pointer' onClick={handleSideNav} size={24}></CgMenuRightAlt> */}
          </section>
        </nav>
        <form className='flex flex-col gap-6 bg-white rounded-lg shadow-lg p-8 w-full max-w-xs'>
          <h2 className='text-4xl font-bold text-center mb-4 text-[#212121]'>
            Login
          </h2>
          <label className='relative flex items-center' htmlFor='username'>
            <Input
              id='username'
              name='username'
              type='text'
              placeholder='Username'
              value=''
            />
            <FaUser className='absolute right-3' size={14} color='#212121' />
          </label>
          <label className='relative flex items-center' htmlFor='password'>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              value=''
            />
            <FaLock className='absolute right-3' size={14} color='#212121' />
          </label>
          <a
            className='text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 ml-2 w-max'
            href='#'
          >
            Forgot your password?
          </a>
          <button
            className='text-[#fafafa] flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors bg-[#26418f] h-10 px-4 py-2 w-full hover:bg-[#212121]'
            type='submit'
          >
            Log In <LuLogIn size={14} />
          </button>
        </form>
        <footer className='grid place-items-center bg-cyan- w-full h-14 absolute bottom-0'>
          <p className='text-xs font-medium text-[#212121]'>© 04/02/2024 Copyright <span className='text-blue-700'>MyPortalITO</span>: By Chencho</p>          
        </footer>
      </article>
      {
        toggleNav && (
          <nav className='absolute right-0  z-[1035] h-dvh w-60 overflow-hidden bg-zinc-800'>
        <section className='flex justify-end items-center px-6 h-12'>
          <CgClose onClick={handleSideNav} className='cursor-pointer' size={24} color='#fafafa'/>
        </section>
        <ul className='bg-cyan- '>
          <li className='relative'>
            <a
              className=' flex gap-4 items-center h-12 cursor-pointer rounded px-6 text-[0.875rem] transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit text-gray-300 hover:text-gray-200 hover:bg-white/10  '
              data-te-sidenav-link-ref
            >
              <FaSquareFacebook size={19} color='#fafafa' />
              Facebook
            </a>
          </li>
          <li className='relative'>
            <a
              className=' flex gap-4 items-center h-12 cursor-pointer rounded px-6 text-[0.875rem] transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit text-gray-300 hover:text-gray-200 hover:bg-white/10  '
              data-te-sidenav-link-ref
            >
              <FaSquareFacebook size={19} color='#fafafa' />
              Instagram
            </a>
          </li>
          <li className='relative'>
            <a
              className=' flex gap-4 items-center h-12 cursor-pointer rounded px-6 text-[0.875rem] transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit text-gray-300 hover:text-gray-200 hover:bg-white/10  '
              data-te-sidenav-link-ref
            >
              <FaSquareFacebook size={19} color='#fafafa' />
              Twitter
            </a>
          </li>
        </ul>
      </nav>
          
        )
      }
      
    </main>
  )
}
