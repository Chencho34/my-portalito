
interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper ({ children }: WrapperProps): JSX.Element {
  return <main className='md:h-[calc(100vh-64px)] py-11 pb-11 flex items-center bg-slate-200'>
    {children}
  </main>
}
