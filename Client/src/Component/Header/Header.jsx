import { useState } from 'react';
import './Header.css';
import './Responsive-Header.css';

export default function Header() {
    let [icon, setIcon] = useState(false);

    let changeIcon = () => {
        setIcon(!icon)
    }
    return (
        <>
            <header>
                <div className='main-section'>
                    <nav>
                        <div className='navbar-bg'>
                            <span>
                                <h1>Nitish Prajapati</h1>
                            </span>
                            <span>
                                Skills
                            </span>
                            <span>
                                Projects
                            </span>
                            <span>
                                Internship
                            </span>
                            {/* <span>
                                Educations
                            </span> */}
                            <span>
                                Achievments
                            </span>
                        </div>

                        <div className='navbar-sm'>
                            <span>
                                <h1>Nitish Prajapati</h1>
                            </span>
                            <span className='headerIcon' onClick={changeIcon} >

                                {
                                    icon ?

                                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="crossIcon icon">

                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>)

                                        :

                                        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="menuIcon icon">

                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>)
                                }
                            </span>
                        </div>

                        <div className='about-navbar'>

                        </div>
                    </nav>
                </div>

                <div className='remain-bg-blur'>

                </div>
            </header>
        </>
    );
}