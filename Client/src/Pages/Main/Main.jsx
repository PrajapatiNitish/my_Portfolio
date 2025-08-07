import './Main.css';
import './Responsive-Main.css';
import Achievement from '../../Component/Achievement/Achievements';
import Educations from '../../Component/Education/Education';
import Form from '../../Component/Form/Form';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Main() {


    // Fatch data from backend
    // useEffect(() => {
    //     axios.get('/api/')
    //         .then((res) => {
    //             console.log("Data arrived")
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // })


    return (
        <>
            <main>
                <div className="main-content">

                    {/* Introduction of myself div section. */}
                    <div className="intro">
                        {/* Welcome msg card */}
                        <div className="welcome">
                            <div className="space">
                                <div className="msg">
                                    Let's Know about Me and my journey.
                                </div>
                            </div>
                        </div>

                        {/* For large screen. */}
                        <div className="intro-screen">
                            <div className='img'>
                                <img src="./Screen_img.png" alt="screen_img" id='screen-img' />
                            </div>

                            <div className='intro-content'>
                                <div className='welcome-msg'>
                                    <p>
                                        Hello !
                                    </p>
                                </div>

                                <div className="about-myself">
                                    <p>
                                        I am <b>Nitish Prajapati</b>. You are on my Profolio Website. You can know about me on this page, about my study, my achievements and career in programming world. A transition from Electrical Engg. to Software Devloper and many more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mini details about my achievement sections. */}
                    <div className='achievements'>
                        <div className='achievement-header'>
                            <h1>
                                Achievements
                            </h1>
                        </div>

                        <div className='about-achievement'>
                            <p>The journey since childhood, I have achieved lots of achievements but These three are memorable moments for me.</p>
                        </div>

                        <div className='achievements-content'>
                            <Achievement
                                head={"Achievement - 1"}
                                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa molestiae nam harum facere sunt aliquam? Dolorem, reiciendis, adipisci iste accusantium repudiandae quidem sunt amet soluta ut, cupiditate nam deleniti?"}
                                link={"none"}
                                linkName={"View Image"}
                            />

                            <Achievement
                                head={"Achievement - 2"}
                                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa molestiae nam harum facere sunt aliquam? Dolorem, reiciendis, adipisci iste accusantium repudiandae quidem sunt amet soluta ut, cupiditate nam deleniti?"}
                                link={"none"}
                                linkName={"View Image"}
                            />

                            <Achievement
                                head={"Achievement - 3"}
                                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa molestiae nam harum facere sunt aliquam? Dolorem, reiciendis, adipisci iste accusantium repudiandae quidem sunt amet soluta ut, cupiditate nam deleniti?"}
                                link={"none"}
                                linkName={"View Image"}
                            />
                        </div>
                    </div>

                    <div className="education-div">
                        <div className="education-header">
                            <h1>Educations</h1>
                        </div>

                        <div className='educations'>
                            <Educations educationHead={'Education-1'} educationContent={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloribus quae fugit earum in nesciunt corporis necessitatibus cupiditate voluptatibus qui? Labore quasi dolore, odit ad exercitationem nobis saepe minus aut!'} />

                            <Educations educationHead={'Education-1'} educationContent={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloribus quae fugit earum in nesciunt corporis necessitatibus cupiditate voluptatibus qui? Labore quasi dolore, odit ad exercitationem nobis saepe minus aut!'} />
                        </div>
                    </div>

                    <div className='feedback-div'>
                        <div className="feedback-content-div">
                            <div className="feedback-head">
                                <h1>Give me your valueable feedback.</h1>
                            </div>
                        </div>

                        <div className="feedback-content-div">
                            <div className="feedback-content">
                                <Form onSubmit={""} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}