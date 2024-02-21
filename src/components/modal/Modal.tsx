import { useState } from 'react'

interface ModalProps {
  handleClick: () => void
}

export default function Modal ({ handleClick }: ModalProps): JSX.Element {
  // const [ toggleModal, setToggleModal] = useState(true)
  // const handleModal = () => setToggleModal(!toggleModal)
  return (
    <>
      {
        handleClick && (
          <div className='fixed bg-gray-500/40 left-0 top-0 z-[105] h-full w-full overflow-y-auto overflow-x-hidden outline-none'>
            <div className='pointer-events-none relative w-auto translate-y-[100px] opacity-1 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]'>
              <div className='min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-lg outline-none bg-slate-200'>
                <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                  <h5
                    className='text-xl font-medium leading-normal text-neutral-200'>
                    Exit?
                  </h5>
                  <button onClick={handleClick} type='button'>X</button>
                </div>
                <div className='relative flex-auto p-4'>
                  Are you sure your want to leave this section?.
                </div>
                <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                  <button
                    type='button'
                    onClick={handleClick}
                    className='inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                  >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
        )  
      }
    </>
   
  )
}
