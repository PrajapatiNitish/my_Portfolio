import './Education.css'

export default function Educations({educationHead, educationContent}) {
    return (
        <>
            <div className="education-content">
                <div className="education-head">
                    {educationHead}
                </div>

                <div className='education'>
                    {educationContent}
                </div>
            </div>
        </>
    );
}