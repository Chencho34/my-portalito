
interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper ({ children }: WrapperProps): JSX.Element {
  return <main className=''>{children}</main>
}
