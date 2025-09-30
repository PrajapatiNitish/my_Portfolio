import './Input.css'

function Input({ type, placeholder, id }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        required
      />
    </>
  )
}

export default Input
