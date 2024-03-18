import { NavItems, NavLogo, NavToggle } from './index.ts'
import { useState } from 'react'
import { Sidebar } from '../index.ts'

export default function Nav (): JSX.Element {
  const [toggleSideMenu, setToggleSideNavMenu] = useState(false)
  const handleClick = () => setToggleSideNavMenu(!toggleSideMenu)

  return (
    <>
      <nav className='w-full h-16 bg-[#212121]'>
        <section className='flex items-center justify-between w-10/12 h-full mx-auto max-w-7xl'>
          <NavLogo />
          <NavItems />  
          <NavToggle onClick={handleClick} toggle={toggleSideMenu} /> 
        </section>
      </nav>
      { toggleSideMenu && <Sidebar handleClick={handleClick} /> }
    </>
  )
}
