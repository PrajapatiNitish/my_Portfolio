import './Input.css'

function Input({ type, placeholder, inputId, inputValue, changeInput }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={inputId}
        required
        value={inputValue}
        onChange={changeInput}
      />
    </>
  )
}

export default Input
