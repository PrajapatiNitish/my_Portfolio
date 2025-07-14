import './Input.css'

function Input({ type, placeholder }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  )
}

export default Input
