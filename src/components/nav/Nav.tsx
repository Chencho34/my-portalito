import { NavItems, NavLogo } from './index.ts'

export default function Nav (): JSX.Element {
  return (
    <nav className='w-full h-16 bg-[#212121]'>
      <section className='flex items-center justify-between w-10/12 h-full mx-auto max-w-7xl'>
        <NavLogo />
        <NavItems />  
        <h1 className='text-white md:hidden block'>Menu</h1>
      </section>
    </nav>
  )
}
