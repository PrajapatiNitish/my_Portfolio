import './Skills_Content.css';

export default function SkillsContent({ header, skillName }) {
    return (
        <>
            <div className="skills-content">
                <div className="content-header">
                    <h3>{header}</h3>
                </div>

                <div className='skills'>
                    {skillName}
                </div>
            </div>
        </>
    );
}