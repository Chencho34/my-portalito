import { CgClose } from 'react-icons/cg'
import { FaInstagram, FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'

interface SidebarProps {
  handleClick: () => void
}

interface SocialMediaProps {
  href: string 
  item: string
  icon: JSX.Element
}

const socialMedia: SocialMediaProps[] = [
  {icon: <FaSquareFacebook />, item: 'Facebook', href: '#'},
  {icon: <FaInstagram />, item: 'Instagram', href: '#'},
  {icon: <FaXTwitter />, item: 'Twitter', href: '#'}
]

export default function Sidebar ({ handleClick }: SidebarProps) {
  return (
    <nav className='absolute right-0  z-[1035] h-dvh w-60 overflow-hidden bg-zinc-800'>
      <section className='flex justify-end items-center px-6 h-12'>
        <CgClose
          onClick={handleClick}
          className='cursor-pointer'
          size={24}
          color='#fafafa'
        />
      </section>
      <ul>
        {
          socialMedia.map(({ icon, item, href }) => (
            <li className='relative'>
              <a
                href={href}
                className=' flex gap-4 items-center h-12 cursor-pointer rounded px-6 text-[0.875rem] transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit text-gray-300 hover:text-gray-200 hover:bg-white/10  '
                data-te-sidenav-link-ref
              >
                {icon}
                {item}
              </a>
            </li>
          ))
        }
        
      </ul>
    </nav>
  )
}
