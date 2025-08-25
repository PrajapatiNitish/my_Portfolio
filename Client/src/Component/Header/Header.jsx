import { useState, useRef, useEffect } from 'react';
import './Header.css';
import './Responsive-Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    // set dropdown for small screen view.
    const [icon, setIcon] = useState(false); //change state false to true.
    const changeIconStyle = useRef(); //it change parallel icon to cros icon
    const showLink = useRef(); //do display none to visible.
    const bgBlur = useRef();

    let changeIcon = () => { //it just change value true <-> flase.
        setIcon(!icon)
    }


    useEffect(() => {
        if (window.innerWidth <= 1024) {
            if (icon == true) {
                changeIconStyle.current.style.height = ("auto");
                showLink.current.style.display = ("flex");
                bgBlur.current.style.backdropFilter = ("blur(5px)")
            }

            if (icon == false) {
                showLink.current.style.display = ("none");
                bgBlur.current.style.backdropFilter = ("blur(0)")
            }
        }
    }, [icon]);


    return (
        <>
            <header ref={bgBlur}>
                <div className='main-section' ref={changeIconStyle}>
                    <nav>
                        <div className='navbar'>
                            <div className='menu'>
                                <div>
                                    <NavLink to={'/'}>
                                        <h1>Nitish Prajapati</h1>
                                    </NavLink>
                                </div>

                                <div className='headerIcon' onClick={changeIcon} >

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
                                </div>
                            </div>

                            <div className='navigate-link' ref={showLink}>
                                <span>
                                    <NavLink to={'/Skills'}>
                                        Skills
                                    </NavLink>
                                </span>
                                <span>
                                    <NavLink to={"/Projects"}>
                                        Projects
                                    </NavLink>
                                </span>
                                <span>
                                    <NavLink to={"/Internship"}>
                                        Internship
                                    </NavLink>
                                </span>
                            </div>
                        </div>

                        <div className='about-navbar'>

                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}