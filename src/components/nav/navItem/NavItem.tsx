import { NavLink } from 'react-router-dom'

interface PathProps {
  path: string;
  item: string;
  icon: JSX.Element;
}

export default function NavItem({ path, icon, item }: PathProps): JSX.Element {
  return (
    <li className='h-full flex'>
      <NavLink
        to={path}
        className={({ isActive }) => `flex items-center gap-2 text-xs font-semibold uppercase  px-5 text-[#fafafa] transition-colors ${
            isActive ? 'text-white h-full bg-[#9811c5]' : ''
          }`
        }
      >
        {icon}
        {item}
      </NavLink>
    </li>
  )
}
