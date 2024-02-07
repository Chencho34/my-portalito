
import { IoHome } from 'react-icons/io5'
import { BsFillGridFill } from 'react-icons/bs'
import { LuLogOut } from 'react-icons/lu'
import { FaFile } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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

export default function Nav() {
  return (
    <nav className='w-full h-16 bg-[#212121]'>
      <section className='flex items-center justify-between w-10/12 h-full mx-auto max-w-7xl'>
        <ul>
          {
            paths.map(({ icon, item, path }, index) => (
              <li key={index}>
                <Link to={path}>
                  {icon}
                  {item}
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </nav>
  )
}
