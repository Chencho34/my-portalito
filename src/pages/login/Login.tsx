import { FaLock, FaUser } from 'react-icons/fa6'
import { LuLogIn } from 'react-icons/lu'
import { Input } from '../../components'

export default function Login(): JSX.Element {
  return (
    <main className='grid grid-flow-row grid-cols-12 h-screen'>
      <article className='col-span-4 bg-cyan-600' style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }}>
        hola
      </article>
      <article className='grid place-items-center col-span-8 bg-slate-200'>
        {/* <nav></nav> */}
        <form className='flex flex-col gap-6 bg-white rounded-lg shadow-lg p-8 w-full max-w-xs'>
          <h2 className='text-4xl font-bold text-center mb-4 text-[#212121]'>Login</h2>
          <label className='relative flex items-center' htmlFor='username'>
            <Input id='username' name='username' type='text' placeholder='Username' value='' />
            <FaUser className='absolute right-3' size={14} color='#212121' />
          </label>
          <label className='relative flex items-center' htmlFor='password'>
            <Input id='password' name='password' type='password' placeholder='Password' value='' />
            <FaLock className='absolute right-3' size={14} color='#212121' />
          </label>
          <a className='text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 ml-2 w-max' href='#'>
            Forgot your password?
          </a>
          <button
            className='text-[#fafafa] flex items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors bg-[#26418f] h-10 px-4 py-2 w-full hover:bg-[#212121]' type='submit'>
            Log In <LuLogIn size={14} />
          </button>
        </form>
        {/* <footer></footer> */}
      </article>
    </main>
  )
}
