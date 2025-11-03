import "./Footer.css";
import "./Responsive-Footer.css";
import MediaLink from "../Media-Link/Media-Link";
import ConnectCompo from "../Connect-Compo/Connect-Compo";

export default function Footer() {

  const linkCompo = [
    {
      className: "social-media",
      elementKey: "social-media",
      linkHeader: "Social",
      allLink: [
        {
          link: "https://www.instagram.com/prajapati.nitish8/",
          linkName: "Instagram",
          linkKey: "instagram",
        },

        {
          link: "https://x.com/ernitish45",
          linkName: "X.com",
          linkKey: "x",
        },

        {
          link: "https://www.linkedin.com/in/nitish-kumar-4ab304262/",
          linkName: "Linked In",
          linkKey: "linkedIn",
        },

        {
          link: "https://www.reddit.com/u/PrajapatiNitish/s/lfPJgpZT3t",
          linkName: "Reddit",
          linkKey: "reddit",
        },
      ],
    },

    {
      className: "coding",
      elementKey: "coding",
      linkHeader: "Coding",
      allLink: [
        {
          link: "https://github.com/PrajapatiNitish",
          linkName: "Github",
          linkKey: "github",
        },

        {
          link: "https://leetcode.com/u/Prajapatinitsh8/",
          linkName: "Leetcode",
          linkKey: "leetcode",
        },
      ],
    },

    {
      className: "hireMe",
      elementKey: "hireMe",
      linkHeader: "Hire Me",
      allLink: [
        {
          link: "https://www.fiverr.com/prajapatinitish?public_mode=true",
          linkName: "fiverr",
          linkKey: "fiverr",
        },

        {
          link: "https://www.upwork.com/freelancers/~01100b915d97d63834",
          linkName: "Upwork",
          linkKey: "upwork",
        },

        {
          link: "https://www.freelancer.in/u/prajapatinitish8",
          linkName: "Freelancer",
          linkKey: "freelancer",
        },
      ],
    },

    {
      className: "download",
      elementKey: "download",
      linkHeader: "Download",
      allLink: [
        {
          link: "https://drive.google.com/drive/folders/1vfmkhUNi3GL-_1IBBggbbv3OabDdciV3?usp=drive_link",
          linkName: "Resume",
          linkKey: "resume",
        },
      ],
    },
  ];

  //return and start writring html code
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="content">
            <div className="contact">
              <h1 className="name">Nitish Prajapati</h1>
              <p>
                Parampara Agaraha, Naganathapura, Electronic City, Bangaluru
                Karnatka 560100
              </p>
              <p>Email - prajapatinitish49@gmail.com</p>
            </div>

            <div className="connect">
              {linkCompo.map((links) => {
                return (
                  <ConnectCompo
                    key={links.elementKey}
                    className={links.className}
                    linkHeader={links.linkHeader}
                    allLink={links.allLink.map((eachLink) => {
                      return (
                        <li key={eachLink.linkKey}>
                          <MediaLink
                            link={eachLink.link}
                            linkName={eachLink.linkName}
                          />
                        </li>
                      );
                    })}
                  />
                );
              })}
            </div>
          </div>

          <div className="copyright">
            <p>
              Copyright © 2025 Nitish Prajapati. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
