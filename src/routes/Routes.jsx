import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Inicio from '../components/inicio/Inicio'
import SignUp from '../components/signUp/SignUp'
import Login from '../components/login/Login'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Inicio />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/signup' element={ <SignUp />} />
      </Routes>
      
    </BrowserRouter>

  )
}

export default MyRoutes