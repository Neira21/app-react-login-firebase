import { Link, useNavigate } from "react-router-dom"
import InputControls from "../inputControls/InputControls"
import { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({email:"", password:""})
  const [error, setError] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const Loguearse = () => {
    if(!values.email || !values.password){
      setError("Datos incompletos")
      return
    }
    setError("")
    setSubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async()=>{
        setSubmitButtonDisabled(false)
        navigate("/")
      })
      .catch((error)=>{
        setSubmitButtonDisabled(false)
        setError(error.message)
      })
  }

  return (
    <>
    <div>
      <div>Login</div>
      <div>
        <InputControls 
          label="Email"
          type='email' 
          placeholder='Ingrese su email' 
          onChange={(e)=>setValues({...values, email: e.target.value})}
          />
        <InputControls 
          label="Contraseña"
          type='password' 
          placeholder='Escriba su contraseña' 
          onChange={(e)=>setValues({...values, password: e.target.value})}
          />
      </div>
      <div>
        {error}
      </div>
      <button onClick={Loguearse} disabled={submitButtonDisabled}>Loaguearse</button>
      
    </div>
    <span>
      <Link to='/'>Ir al Inicio</Link>
      <br />
      <Link to='/signup'>Regístrate Gratis</Link>
    </span>
    </>
  )
}

export default Login