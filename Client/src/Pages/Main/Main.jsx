import './Main.css';
import './Responsive-Main.css';
import Achievement from '../../Component/Achievement/Achievements';

export default function Main() {
    return (
        <>
            <main>
                <div className="main-content">

                    {/* Introduction of myself div section. */}
                    <div className="intro">

                        {/* For large screen. */}
                        <div className="intro-lg-screen">
                            <div className='img-lg'>
                                <img src="./Screen_img.png" alt="lg_screen_img" id='lg-screen-img' />
                            </div>

                            <div className='intro-content-lg'>
                                <div className='welcome-msg-lg'>
                                    <p>
                                        Welcome ! <br />

                                        Let's Know about me.
                                    </p>
                                </div>

                                <div className="about-myself-lg">
                                    <p>
                                        I am <b>Nitish Prajapati</b>. You are on my Profolio Website. You can know about me on this page, about my study, my achievements and career in programming world. A transition from Electrical Engg. to Software Devloper and many more.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* For small screen */}

                        <div className="intro-sm-screen">
                            <div className='img-sm'>
                                <img src="./Screen_img.png" alt="sm_screen_img" id='sm-screen-img' />
                            </div>

                            <div className='intro-content-sm'>
                                <div className='welcome-msg-sm'>
                                    <p>
                                        Welcome ! <br />

                                        Let's Know about me.
                                    </p>
                                </div>

                                <div className="about-myself-sm">
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
                            <h2>
                                Achievements
                            </h2>
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
                </div>
            </main>
        </>
    );
}