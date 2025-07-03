import { useState } from 'react';
import './Footer.css';
import './Responsive-Footer.css';
import MediaLink from '../Media-Link/Media-Link';

export default function Footer() {
    let [footerIcon, setfooterIcon] = useState(false);

    let changeIcon = () => {
        setfooterIcon(!footerIcon)
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
                                        <h3>Connect with me</h3>
                                    </div>

                                    <span className='footerIcon' onClick={changeIcon}>
                                        {
                                            footerIcon ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='up'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='down'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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

                                    <span className='footerIcon' onClick={changeIcon}>
                                        {
                                            footerIcon ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='up'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='down'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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

                                    <span className='footerIcon' onClick={changeIcon}>
                                        {
                                            footerIcon ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='up'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='down'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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

                                    <span className='footerIcon' onClick={changeIcon}>
                                        {
                                            footerIcon ?

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='up'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>)

                                                :

                                                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='down'>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
                                <h3>Connect with me</h3>
                                <MediaLink
                                    link={""}
                                    linkName={"Instagram"}
                                />

                                <MediaLink
                                    link={""}
                                    linkName={"X"}
                                />

                                <MediaLink
                                    link={""}
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
                                    link={""}
                                    linkName={"GitHub"}
                                />

                                <MediaLink
                                    link={""}
                                    linkName={"Leetcode"}
                                />
                            </div>

                            <div className="work-with-me">
                                <h3>Work with me</h3>

                                <MediaLink
                                    link={""}
                                    linkName={"Fiverr"}
                                />

                                <MediaLink
                                    link={""}
                                    linkName={"Upwork"}
                                />

                                <MediaLink
                                    link={""}
                                    linkName={"Freelancer"}
                                />
                            </div>

                            <div className="downloads">
                                <h3>Download</h3>

                                <MediaLink
                                    link={""}
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