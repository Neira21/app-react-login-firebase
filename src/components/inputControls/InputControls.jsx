const InputControls = (props) => {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input {...props}/>
    </div>
  )
}

export default InputControls