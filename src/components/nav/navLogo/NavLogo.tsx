import { Link } from 'react-router-dom'

export default function NavLogo (): JSX.Element {
  return (
    <article className='flex items-center gap-4 text-[#fafafa] space-y-1.5'>
      <Link to='/' className='text-2xl font-medium tracking-wider leading-none'>MyPortalITO</Link>
      <p className='hidden lg:block text-sm font-thin'>System to students</p>
    </article>
  )
}
