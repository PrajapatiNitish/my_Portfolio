import './Button.css';

function Button({ BtnName }) {
    return (
        <>
            <button type='submit'>
                {BtnName}
            </button>
        </>
    )
}

export default Button
