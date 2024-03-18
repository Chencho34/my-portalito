import { CgClose, CgMenuRightAlt } from 'react-icons/cg'

interface NavToggleProps {
  toggle: boolean
  onClick: () => void
}

export default function NavToggle({ toggle, onClick } : NavToggleProps ): JSX.Element {
  return (
    <>
      {
        toggle
        ? <button onClick={onClick} className='text-white md:hidden block'><CgClose color='#fafafa' size={24}/></button>
        : <button onClick={onClick} className='text-white md:hidden block'><CgMenuRightAlt color='#fafafa' size={24}/></button>
      }
    </>
  )
}
