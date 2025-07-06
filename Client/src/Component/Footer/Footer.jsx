import { useState } from 'react';
import './Footer.css';
import './Responsive-Footer.css';
import MediaLink from '../Media-Link/Media-Link';

export default function Footer() {
    let [connectWithMe, setConnectWithMe] = useState(false);
    let [programming, setProgramming] = useState(false);
    let [workWithMe, setWorkWithMe] = useState(false);
    let [download, setDownload] = useState(false);



    let changeConnectWithMeIcon = () => {
        setConnectWithMe(!connectWithMe)
    }

    let changeProgrammingIcon = () => {
        setProgramming(!programming)
    }

    let changeWorkWithMeIcon = () => {
        setWorkWithMe(!workWithMe)
    }

    let changeDownloadIcon = () => {
        setDownload(!download)
    }


    return (
        <>
            <footer>
                <div className='footer-content'>
                    <div className='content'>
                        {/* For small screen or smartphone. */}
                        <div className='connect-sm'>
                            <div className="connect-with-me view-footer-slide">
                                <div className='connect-head'>
                                    <div>
                                        <h3>Connect to me</h3>
                                    </div>

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

                                <div className='connect-content'>

                                </div>
                            </div>

                            <div className="code view-footer-slide">
                                <div className='connect-head'>
                                    <div>
                                        <h3>Programming</h3>
                                    </div>

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
                            </div>

                            <div className="work-with-me view-footer-slide">
                                <div className='connect-head'>
                                    <div>
                                        <h3>Work with me</h3>
                                    </div>

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
                            </div>

                            <div className="download view-footer-slide">
                                <div className='connect-head'>
                                    <div>
                                        <h3>Download</h3>
                                    </div>

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
                            </div>
                        </div>

                        {/* For big screen like Tablet, laptop and desktop. */}
                        <div className="contact">
                            <h3 className="name">Nitish Prajapati</h3>
                            <p>Parampara Agaraha, Naganathapura, Electronic City, Bangaluru Karnatka 560100</p>
                            <p>Call - +91 8271747974</p>
                            <p>Email - prajapatinitish49@gmail.com</p>
                        </div>

                        <div className="connect">
                            <div className="social-media">
                                <h3>Connect to me</h3>
                                <MediaLink
                                    link={"https://www.instagram.com/prajapati.nitish8/"}
                                    linkName={"Instagram"}
                                />

                                <MediaLink
                                    link={"https://x.com/ernitish45"}
                                    linkName={"X"}
                                />

                                <MediaLink
                                    link={"https://www.linkedin.com/in/nitish-kumar-4ab304262/"}
                                    linkName={"Linked In"}
                                />

                                <MediaLink
                                    link={""}
                                    linkName={"Reddit"}
                                />
                            </div>

                            <div className="code">
                                <h3>Code</h3>

                                <MediaLink
                                    link={"https://github.com/PrajapatiNitish"}
                                    linkName={"GitHub"}
                                />

                                <MediaLink
                                    link={"https://leetcode.com/u/Prajapatinitsh8/"}
                                    linkName={"Leetcode"}
                                />
                            </div>

                            <div className="work-with-me">
                                <h3>Work with me</h3>

                                <MediaLink
                                    link={"https://www.fiverr.com/prajapatinitish?public_mode=true"}
                                    linkName={"Fiverr"}
                                />

                                <MediaLink
                                    link={"https://www.upwork.com/freelancers/~01100b915d97d63834"}
                                    linkName={"Upwork"}
                                />

                                <MediaLink
                                    link={"https://www.freelancer.in/u/prajapatinitish8"}
                                    linkName={"Freelancer"}
                                />
                            </div>

                            <div className="downloads">
                                <h3>Download</h3>

                                <MediaLink
                                    link={"https://drive.google.com/drive/folders/1vfmkhUNi3GL-_1IBBggbbv3OabDdciV3?usp=drive_link"}
                                    linkName={"Resume"}
                                />
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