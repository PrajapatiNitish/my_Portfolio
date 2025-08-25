import { useState } from "react";
import "./Footer.css";
import "./Responsive-Footer.css";
import MediaLink from "../Media-Link/Media-Link";
import ConnectCompo from "../Connect-Compo/Connect-Compo";

export default function Footer() {
  const [social, setSocial] = useState();
  const [coding, setCoding] = useState();
  const [hireMe, setHireMe] = useState();
  const [download, setDownload] = useState();

  const changeSocialIcon = () => {
    setSocial(!social)
  }

  const changeCodingIcon = () => {
    setCoding(!coding);
  };

  const changeHireMeIcon = () => {
    setHireMe(!hireMe);
  };

  const changeDownloadIcon = () => {
    setDownload(!download);
  };

  //return and start writring html code
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="content">
            <div className="contact">
              <h3 className="name">Nitish Prajapati</h3>
              <p>
                Parampara Agaraha, Naganathapura, Electronic City, Bangaluru
                Karnatka 560100
              </p>
              <p>Call - +91 8271747974</p>
              <p>Email - prajapatinitish49@gmail.com</p>
            </div>

            <div className="connect">
              <ConnectCompo
                className={"social-media"}
                linkHeader={"Social"}
                mouseClick={changeSocialIcon}
                funcOfElement={social}
                allLink={
                  <>
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
                        link={
                          "https://www.linkedin.com/in/nitish-kumar-4ab304262/"
                        }
                        linkName={"Linked In"}
                      />
                    </li>

                    <li>
                      <MediaLink
                        link={
                          "https://www.reddit.com/u/PrajapatiNitish/s/lfPJgpZT3t"
                        }
                        linkName={"Reddit"}
                      />
                    </li>
                  </>
                }
              />

              <ConnectCompo
                className={"coding"}
                linkHeader={"Coding"}
                mouseClick={changeCodingIcon}
                funcOfElement={coding}
                allLink={
                  <>
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
                  </>
                }
              />

              <ConnectCompo
                className={"hireMe"}
                linkHeader={"Hire Me"}
                mouseClick={changeHireMeIcon}
                funcOfElement={hireMe}
                allLink={
                  <>
                    <li>
                      <MediaLink
                        link={
                          "https://www.fiverr.com/prajapatinitish?public_mode=true"
                        }
                        linkName={"Fiverr"}
                      />
                    </li>

                    <li>
                      <MediaLink
                        link={
                          "https://www.upwork.com/freelancers/~01100b915d97d63834"
                        }
                        linkName={"Upwork"}
                      />
                    </li>

                    <li>
                      <MediaLink
                        link={"https://www.freelancer.in/u/prajapatinitish8"}
                        linkName={"Freelancer"}
                      />
                    </li>
                  </>
                }
              />

              <ConnectCompo
                className={"download"}
                linkHeader={"Download"}
                mouseClick={changeDownloadIcon}
                funcOfElement={download}
                allLink={
                  <>
                    <li>
                      <MediaLink
                        link={
                          "https://drive.google.com/drive/folders/1vfmkhUNi3GL-_1IBBggbbv3OabDdciV3?usp=drive_link"
                        }
                        linkName={"Resume"}
                      />
                    </li>
                  </>
                }
              />
            </div>
          </div>

          <div className="copyright">
            <p>
              Copyright © 2025 Nitish Prajapati. All rights reserved | India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
