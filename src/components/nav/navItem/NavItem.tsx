import { NavLink } from 'react-router-dom'

interface PathProps {
  path: string;
  item: string;
  icon: JSX.Element;
}

export default function NavItem({ path, icon, item }: PathProps): JSX.Element {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => `h-full flex items-center gap-2 text-xs font-semibold uppercase px-5 transition-colors ${
            isActive ? 'text-[#fafafa] bg-[#9811c5]' : 'text-gray-300'
          }`
        }
      >
        {icon}
        {item}
      </NavLink>
    </li>
  )
}
