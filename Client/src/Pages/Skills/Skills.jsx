import SkillsContent from '../../Component/Skills_Content/Skills_Content';
import SkillsName from '../../Component/Skill_Name/Skill_Name';
import './Skills.css'
import './Responsive-Skills.css'

export default function Skills() {
    const skills = [
        {
            header: "Header - 1",
            skillName : [
                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },

                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },
            ]
        },

        {
            header: "Header - 1",
            skillName : [
                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },

                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },
            ]
        },

        {
            header: "Header - 1",
            skillName : [
                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },

                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },
            ]
        },

        {
            header: "Header - 1",
            skillName : [
                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },

                {
                    skill : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem provident obcaecati, expedita culpa ea modi rerum pariatur maiores distinctio officiis id facere aliquid velit omnis quas adipisci? Quisquam, sequi.",
                },
            ]
        },
    ]

    return (
        <>
            <div className="skills-main-div">
                <div className="skills-sub-div">
                    <div className='skills-header'>
                        <h2>Skills - It matters a lot</h2>
                    </div>

                    <div className="skills-content-div">
                        {skills.map((skill) => {
                            return (
                                <SkillsContent 
                            header={skill.header} 
                            skillName={skill.skillName.map((skillContent) => {
                                return (
                                    <SkillsName 
                                    skill={skillContent.skill} 
                                />
                                );
                            })} 
                        />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}