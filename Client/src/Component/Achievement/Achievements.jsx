import './Achievement.css'

export default function Achievement({ head, content, link, linkName }) {
    return (
        <>
            <div className='Achievement-content-div'>
                <div className='head'>
                    {head}
                </div>

                <div className='content'>
                    {content}
                </div>

                <span className='link'>
                    <a href={link}>
                        {linkName}
                    </a>
                </span>
            </div>
        </>
    );
}