import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Kardex, Login, NotFound, Schedule } from '../pages'
import { PublicLayout } from '../layouts'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' errorElement={<NotFound />} element={<PublicLayout />}>
        <Route path='/' index element={<Home />} />
        <Route path='kardex' element={<Kardex />} />
        <Route path='schedule' element={<Schedule />} />
      </Route>
      <Route path='/login'>
        <Route path='/login' element={<Login />} />
      </Route>
    </>
  )
)
