import { CgMenuRightAlt, CgClose} from 'react-icons/cg'

import { NavItems, NavLogo } from './index.ts'
import { useState } from 'react'
import { Sidebar } from '../index.ts'


export default function Nav (): JSX.Element {
  const [toggleSideNavMenu, setToggleSideNavMenu] = useState(false)
  const handleClick = () => setToggleSideNavMenu(!toggleSideNavMenu)

  return (
    <>
      <nav className='w-full h-16 bg-[#212121]'>
        <section className='flex items-center justify-between w-10/12 h-full mx-auto max-w-7xl'>
          <NavLogo />
          <NavItems />  
          {
            toggleSideNavMenu
            ? <button onClick={handleClick} className='text-white md:hidden block'><CgClose color='#fafafa' size={24}/></button>
            : <button onClick={handleClick} className='text-white md:hidden block'><CgMenuRightAlt color='#fafafa' size={24}/></button>
          }
        </section>
      </nav>
      {
        toggleSideNavMenu && <Sidebar handleClick={handleClick}/>
      }
    </>
  )
}
