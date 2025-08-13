import './Textarea.css'

export default function Textarea({ text }) {
    return (
        <>
            <textarea
                placeholder={text}
                maxLength={1000}
                minLength={1}
            >
            </textarea>
        </>
    )
}
