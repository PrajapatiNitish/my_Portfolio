import { useEffect, useRef, useState } from 'react';
import './Footer.css';
import './Responsive-Footer.css';
import MediaLink from '../Media-Link/Media-Link';

export default function Footer() {

    // change in connectWithMe
    let [connectWithMe, setConnectWithMe] = useState(false); // Change state
    let changeConnectWithMe = useRef(); //Select html element
    let changeConnectWithMeDisplay = useRef();

    let changeConnectWithMeIcon = (e) => {
        e.preventDefault();

        setConnectWithMe(!connectWithMe);
        console.log(connectWithMe, "this is printing")
    }

    useEffect(() => {
        if(window.innerWidth <= 430) {
            if (connectWithMe == true) {
                changeConnectWithMe.current.style.height = ("auto");
                changeConnectWithMeDisplay.current.style.display = ("flex");
            }

            else {
                changeConnectWithMeDisplay.current.style.display = ("none");
                changeConnectWithMe.current.style.height = ("auto")
            }
        }
    }, [connectWithMe])


    // changes in programming
    let [programming, setProgramming] = useState(false);
    let changeProgramming = useRef();
    let changeProgrammingDisplay = useRef();
    
    let changeProgrammingIcon = () => {
        setProgramming(!programming)
    }

    useEffect(() => {
        if(window.innerWidth <= 430) {
            if (programming == true) {
                changeProgramming.current.style.height = ("auto");
                changeProgrammingDisplay.current.style.display = ("flex");
            }

            else {
                changeProgrammingDisplay.current.style.display = ("none");
                changeProgramming.current.style.height = ("auto")
            }
        }
    }, [programming]);


    // Change in workWithMe
    let [workWithMe, setWorkWithMe] = useState(false);
    let changeWorkWithMe = useRef();
    let changeWorkWithMeDisplay = useRef();

    let changeWorkWithMeIcon = () => {
        setWorkWithMe(!workWithMe)
    }

    useEffect(() => {
        if(window.innerWidth <= 430) {
            if (workWithMe == true) {
                changeWorkWithMe.current.style.height = ("auto");
                changeWorkWithMeDisplay.current.style.display = ("flex");
            }

            else {
                changeWorkWithMeDisplay.current.style.display = ("none");
                changeWorkWithMe.current.style.height = ("auto")
            }
        }
    }, [workWithMe])


    //Change in  download
    let [download, setDownload] = useState(false);
    let changeDownload = useRef();
    let changeDownloadDisplay = useRef();

    let changeDownloadIcon = () => {
        setDownload(!download)
    }

    useEffect(() => {
        if(window.innerWidth <= 430) {
            if (download == true) {
                changeDownloadDisplay.current.style.height = ("auto");
                changeDownloadDisplay.current.style.display = ("flex");
            }
            else {
                changeDownloadDisplay.current.style.display = ("none");
                changeDownload.current.style.height = ("auto")
            }
        }
    }, [download])


    //Store all element in array.
    let totalElement = [connectWithMe, programming, workWithMe, download];
    console.log(totalElement)

    let [elementState, setElementState] = useState(false);




    return (
        <>
            <footer>
                <div className='footer-content'>
                    <div className='content'>
                        <div className="contact">
                            <h3 className="name">Nitish Prajapati</h3>
                            <p>Parampara Agaraha, Naganathapura, Electronic City, Bangaluru Karnatka 560100</p>
                            <p>Call - +91 8271747974</p>
                            <p>Email - prajapatinitish49@gmail.com</p>
                        </div>

                        <div className="connect">
                            <div className="social-media" ref={changeConnectWithMe}>
                                <div className='name_icon'>
                                    <span><h3>Social</h3></span>
                                    <span className='footerIcon connectWithMe' onClick={changeConnectWithMeIcon}>
                                        {
                                            connectWithMe ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='up'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='down'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>)
                                        }
                                    </span>
                                </div>

                                <div className="link" ref={changeConnectWithMeDisplay}>
                                    <li>
                                        <MediaLink
                                            link={"https://www.instagram.com/prajapati.nitish8/"}
                                            linkName={"Instagram"}
                                        />
                                    </li>

                                    <li>
                                        <MediaLink
                                            link={"https://x.com/ernitish45"}
                                            linkName={"X"}
                                        />
                                    </li>

                                    <li>
                                        <MediaLink
                                            link={"https://www.linkedin.com/in/nitish-kumar-4ab304262/"}
                                            linkName={"Linked In"}
                                        />
                                    </li>

                                    <li>
                                        <MediaLink
                                            link={"https://www.reddit.com/u/PrajapatiNitish/s/lfPJgpZT3t"}
                                            linkName={"Reddit"}
                                        />
                                    </li>
                                </div>
                            </div>

                            <div className="code" ref={changeProgramming}>
                                <div className='name_icon'>
                                    <span><h3>Programming</h3></span>
                                    <span className='footerIcon programming' onClick={changeProgrammingIcon}>
                                        {
                                            programming ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='up'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='down'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>)
                                        }
                                    </span>
                                </div>

                                <div className="link" ref={changeProgrammingDisplay}>
                                    <li>
                                        <MediaLink
                                            link={"https://github.com/PrajapatiNitish"}
                                            linkName={"GitHub"}
                                        />
                                    </li>

                                    <li>
                                        <MediaLink
                                            link={"https://leetcode.com/u/Prajapatinitsh8/"}
                                            linkName={"Leetcode"}
                                        />
                                    </li>
                                </div>
                            </div>

                            <div className="work-with-me" ref={changeWorkWithMe}>
                                <div className='name_icon'>
                                    <span><h3>Hire me</h3></span>
                                    <span className='footerIcon workWithMe' onClick={changeWorkWithMeIcon}>
                                        {
                                            workWithMe ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='up'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='down'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>)
                                        }
                                    </span>
                                </div>

                                <div className="link" ref={changeWorkWithMeDisplay}>
                                    <li>
                                        <MediaLink
                                            link={"https://www.fiverr.com/prajapatinitish?public_mode=true"}
                                            linkName={"Fiverr"}
                                        />
                                    </li>

                                    <li>
                                        <MediaLink
                                            link={"https://www.upwork.com/freelancers/~01100b915d97d63834"}
                                            linkName={"Upwork"}
                                        />
                                    </li>

                                    <li>
                                        <MediaLink
                                            link={"https://www.freelancer.in/u/prajapatinitish8"}
                                            linkName={"Freelancer"}
                                        />
                                    </li>
                                </div>
                            </div>

                            <div className="downloads" ref={changeDownload}>
                                <div className='name_icon'>
                                    <span><h3>Download</h3></span>
                                    <span className='footerIcon download' onClick={changeDownloadIcon}>
                                        {
                                            download ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='up'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='down'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>)
                                        }
                                    </span>
                                </div>

                                <div className="link" ref={changeDownloadDisplay}>
                                    <li>
                                        <MediaLink
                                            link={"https://drive.google.com/drive/folders/1vfmkhUNi3GL-_1IBBggbbv3OabDdciV3?usp=drive_link"}
                                            linkName={"Resume"}
                                        />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='copyright'>
                        <p>Copyright © 2025 Nitish Prajapati. All rights reserved | India</p>
                    </div>
                </div>
            </footer>
        </>
    );
}