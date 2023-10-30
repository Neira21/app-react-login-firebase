import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import { useEffect, useState } from "react"
const Inicio = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState([])

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  },[])

  function Salir(){
    auth.signOut()
    navigate('/')
  }

  return (
    <div>
      <h1>Bienvenido {userName}</h1>
      <h1>Login o Registro de Usuario</h1>
      <div style={{display:'flex', flexDirection:'column'}}>
        <Link to='/login'>Ir a Login</Link>
        <Link to='/signup'>Regístrate Gratis</Link>
      </div>
      <div>
        {userName ? <button onClick={Salir}>Salir</button>:null}
      </div>
    </div>
  )
}

export default Inicio