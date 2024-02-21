import { BsFillGridFill } from 'react-icons/bs'
import { FaFile } from 'react-icons/fa6'
import { IoHome } from 'react-icons/io5'
import { LuLogOut } from 'react-icons/lu'
import { NavItem } from '../index.ts'

interface Path {
  path: string;
  item: string;
  icon: JSX.Element;
}

const paths: Path[] = [
  { path: '/', item: 'Home', icon: <IoHome /> },
  { path: 'kardex', item: 'Kardex', icon: <FaFile /> },
  { path: 'schedule', item: 'Schedule', icon: <BsFillGridFill /> },
  { path: 'login', item: 'LogOut', icon: <LuLogOut /> },
]

export default function NavItems (): JSX.Element {
  return (
    <ul className='hidden md:flex flex-row h-full'>
      {
        paths.map(({ icon, item, path }, index) => (
          <NavItem key={index} icon={icon} item={item} path={path}/>
        ))
      }
    </ul>
  )
}
