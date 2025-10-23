import './Textarea.css'

export default function Textarea({ text, textareaId, textareaValue, changeTextarea}) {
    return (
        <>
            <textarea
                placeholder={text}
                maxLength={500}
                minLength={1}
                id={textareaId}
                value={textareaValue}
                onChange={changeTextarea}
                required
            >
            </textarea>
        </>
    )
}
