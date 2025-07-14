import Input from "./Input/Input"
import Button from "./Button/Button"
import Textarea from "./Textarea/Textarea"
import './Form.css'

function Form() {
    return (
        <form className='form'>
            <Input
                type={"text"}
                placeholder={"Enter your name"} 
            />

            <Textarea text={"Write your feedback"}/>

            <Button 
                BtnName={"Submit"} 
            />
        </form>
    )
}

export default Form
