interface InputProps {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'number';
  onChange?: () => void;
}

export default function Input({ id, name, value, placeholder, type, onChange }: InputProps): JSX.Element {
  return (
    <input
      className='h-10 w-full rounded-md border px-3 py-2 text-sm  focus-visible:outline-none focus-visible:ring-2'
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}      
    />
  )
}
