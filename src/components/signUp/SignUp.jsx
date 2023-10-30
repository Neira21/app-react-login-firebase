import { Link, useNavigate } from "react-router-dom"
import styles from './SignUp.module.css'
import { useState } from "react"

import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import InputControls from "../inputControls/InputControls"

const SignUp = () => {

  const navigate = useNavigate()

  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const Registro = () => {
    if(!value.name || !value.email || !value.password || !value.confirmPassword){
      setError("Llene todos los campos")
      return
    }
    if(value.password !== value.confirmPassword){
      setError("Las contraseñas no coinciden")
      return
    }

    setError("")
    setSubmitButtonDisabled(true)
    createUserWithEmailAndPassword(auth, value.email, value.password)
    .then(async(res)=>{
      setSubmitButtonDisabled(false)
      const user = res.user
      await updateProfile(user, {displayName: value.name})
      navigate('/login')
    })
    .catch((error)=>{
      setSubmitButtonDisabled(false)
      setError(error.message)
    })
  }


  return (
    <>
      <div>SignUp</div>
      <div className={styles.registroContenedor}>
        <InputControls 
          label="Nombre"
          type="text"
          placeholder="Ingrese su nombre"
          onChange={(e)=>setValue({...value, name: e.target.value})}
          >
        </InputControls>

        <InputControls 
          label="Email"
          type="text"
          placeholder="Ingrese un correo"
          onChange={(e)=>setValue({...value, email: e.target.value})}
          >
        </InputControls>

        <InputControls 
          label="Contraseña"
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={(e)=>setValue({...value, password: e.target.value})}
          >
        </InputControls>

        <InputControls
          label="Confirmar Contraseña"
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={(e)=>setValue({...value, confirmPassword: e.target.value})}
          >
        </InputControls>
        
        <div>
          <b>{error}</b>
          <button onClick={Registro} disabled={submitButtonDisabled}>Registrar usuario</button>
        </div>

        <Link to='/'>Ir al Inicio</Link>
      </div>
      ¿Ya tienes un cuenta? <Link to='/login'>Login acá</Link>
    </>
  )
}

export default SignUp
