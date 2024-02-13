export default function Home () {
  return (
    <div className='grid grid-cols-12 gap-4 w-[76%] mx-auto'>
      <div className='col-span-12 md:col-span-12 h-[120px] bg-white shadow p-8 rounded'>
        <section className='flex items-center h-full gap-10'>
          <section className='w-[72px] rounded-full overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
              alt=''
            />
          </section>
          <section>
            <h1>Ingenieria Informatica</h1>
            <h1>Jose Armando Crescencio Rico</h1>
            <p className='text-sm'>21010001</p>
          </section>
        </section>
      </div>
      <div className='col-span-12 md:col-span-7 h-[300px] bg-white shadow p-8 rounded'>
        <section>
          <h1 className='text-xl'>Personal Information</h1>
          <p className='text-sm'>
            Name: <span>Jose Armando Crescencio Rico</span>
          </p>
          <p className='text-sm'>
            Age: <span>21</span>
          </p>
          <p className='text-sm'>
            Addres: <span>Calle Jose Maria Crescencio S/N</span>
          </p>
          <p className='text-sm'>
            Gmail: <span>test@gmail.com</span>
          </p>
          <p className='text-sm'>
            Tel: <span>272-130-5556</span>
          </p>
          <p className='text-sm'>
            Profile: <span>Estudiante</span>
          </p>
          <p className='text-sm'>
            Bithday: <span>06/30/2002</span>
          </p>
          <p className='text-sm'>
            Genero: <span>Masculino</span>
          </p>
        </section>
      </div>
      <div className='col-span-12 md:col-span-5 h-[300px] bg-white shadow p-8 rounded'>
        <h1 className='text-xl'>Escolar Information</h1>
        <p className='text-sm'>
          Carrera: <span>Informatica</span>
        </p>
        <p className='text-sm'>
          Semestre actual: <span>7</span>
        </p>
        <p className='text-sm'>
          Ingreso: <span>Enero - Junio - 2021</span>
        </p>
        <p className='text-sm'>
          Reticula: <span>IINF - 2012 - 220</span>
        </p>
        <p className='text-sm'>
          Periodo: <span>Enero - Junio - 2024</span>
        </p>
      </div>
    </div>
  )
}
