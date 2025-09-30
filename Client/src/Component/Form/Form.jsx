import Input from "./Input/Input"
import Button from "./Button/Button"
import Textarea from "./Textarea/Textarea"
import './Form.css'

function Form({ onSubmit }) {
    return (
        <form className='form' onSubmit={onSubmit}>
            <Input
                type={"text"}
                placeholder={"Your fullname"}
                id={"fullname"} 
            />

            <Input
                type={"email"}
                placeholder={"Your e-mail"}
                id={"email"} 
            />

            <Textarea text={"Write your feedback"}/>

            <Button 
                BtnName={"Submit"} 
            />
        </form>
    )
}

export default Form
