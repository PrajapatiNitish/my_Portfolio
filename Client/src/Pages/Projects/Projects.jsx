import "./Projects.css";
import "./Responsive-Project.css";
import Videos from "../../Component/Videos/Video";
import ToolImage from "../../Component/ToolImages/ToolImage";

export default function Projects() {
  const videos = [
    {
      videoSrc: "./mobile-view.mp4",
      videoId: "video-1", //use as key also
      videoLabel: "- Mobile View",
      videoClass: "mobile-view"
    },

    {
      videoSrc: "./pad-view.mp4",
      videoId: "video-2", //use as key also
      videoLabel: "- Tab and iPad View",
      videoClass: "tab-view"
    },

    {
      videoSrc: "./desktop-view.mp4",
      videoId: "video-3", //use as key also
      videoLabel: "- Desktop View",
      videoClass: "desktop-view"
    },
  ];

  const images = [
    {
      imageClassName: "frontend-tools",
      imageId: "frontend", //use as key
      imageLabel: "Frontend Tools",
      imageLists: [
        {
          toolImageclassName: "vanilla-css-image",
          toolImageId: "vanilla-css",
          toolImageSrc: "./css-logo.webp",
          toolImageLabel: "Vanilla CSS3",
        },

        {
          toolImageclassName: "js-image",
          toolImageId: "java-script",
          toolImageSrc: "./js.webp",
          toolImageLabel: "JavaScript",
        },

        {
          toolImageclassName: "react-js-image",
          toolImageId: "react-js",
          toolImageSrc: "./react-js.svg",
          toolImageLabel: "React js",
        },

        {
          toolImageclassName: "axios-image",
          toolImageId: "axios",
          toolImageSrc: "./axios.webp",
          toolImageLabel: "Axios",
        },
      ],
    },

    {
      imageClassName: "backend-tools",
      imageId: "backend", //use as key
      imageLabel: "Backend Tools",
      imageLists: [
        {
          toolImageclassName: "node-js-image",
          toolImageId: "node-js",
          toolImageSrc: "./node-js.webp",
          toolImageLabel: "Node js",
        },

        {
          toolImageclassName: "express-js-image",
          toolImageId: "express-js",
          toolImageSrc: "./express-js.webp",
          toolImageLabel: "Express js",
        },

        {
          toolImageclassName: "restfull-api-image",
          toolImageId: "restfull-webp",
          toolImageSrc: "./rest-api.webp",
          toolImageLabel: "Restfull API",
        },

        {
          toolImageclassName: "my-sql-image",
          toolImageId: "my-sql",
          toolImageSrc: "./mysql.webp",
          toolImageLabel: "My SQL",
        },
      ],
    },

    {
      imageClassName: "other-tools",
      imageId: "other", //use as key
      imageLabel: "Other Tools",
      imageLists: [

        {
          toolImageclassName: "git-image",
          toolImageId: "git",
          toolImageSrc: "./git.webp",
          toolImageLabel: "Git",
        },

        {
          toolImageclassName: "github-image",
          toolImageId: "github",
          toolImageSrc: "./github.svg",
          toolImageLabel: "GitHub",
        },

        {
          toolImageclassName: "vercel-image",
          toolImageId: "vercel",
          toolImageSrc: "./vercel-logo.webp",
          toolImageLabel: "Vercel",
        },

        {
          toolImageclassName: "vscode-image",
          toolImageId: "vscode",
          toolImageSrc: "./vscode.webp",
          toolImageLabel: "VS Code",
        },
      ],
    },
  ];
  return (
    <>
      <div className="project-div">
        <div className="project-sub-div">
          <div className="project-header">
            <h2>Showing my works</h2>
          </div>

          <div className="project">
            <div className="first-project">
              <div className="header">
                <h3>- Portfolio Website </h3>
                <p>
                  This one is my first full stack project and also my portfolio
                  website. I have designed and developed this website by myself.
                  I have optimized this website, so that user can get better
                  performance and user experience. Website can run smoothly for
                  all common type of devices which are used by users in these
                  days either it is desktop, tablet or mobile. I have shown
                  tools & technologies (that i have used to build my website)
                  and visuals of my website below.
                </p>
              </div>

              <div className="project-view">
                {videos.map((video) => {
                  return (
                    <Videos
                      key={video.videoId}
                      videoSrc={video.videoSrc}
                      videoId={video.videoId}
                      videoClass={video.videoClass}
                      videoLabel={video.videoLabel}
                      videoPara={video.videoPara}
                    />
                  );
                })}
              </div>

              <div className="show-tools-technologies">
                <div className="tools-header">
                  <h4>Tools & Technologies Used in this project: </h4>
                </div>

                <div className="tools">
                  {images.map((image) => {
                    return (
                      <ul className={image.imageClassName} key={image.imageId}>
                        <p>{image.imageLabel}</p>
                        {image.imageLists.map((li) => {
                          return (
                            <ToolImage
                              key={li.toolImageId}
                              toolImageclassName={li.toolImageclassName}
                              toolImageId={li.toolImageId}
                              toolImageSrc={li.toolImageSrc}
                              toolImageLabel={li.toolImageLabel}
                            />
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>

              <div className="full-descriptions-and-progress">
                I have gained lot of experiences through this project. I told
                you, I have started to build this website in June 2025, I have
                created it once but there was a bug come inside code, I didn't
                understand the bug and also i don't like the ui of previous
                website. So I decided to re-create it Not from scratch but I
                have re-used some ui parts and re-write the code in better
                structure and better readiblity. I have completed it in October
                2025. During these five months of developing website, I have
                learned lot of new things and also improved my coding skills. I
                tell you, priviously I was just taking lecture and do code but
                wasn't able to code. Infact I wasn't able to create a samll
                basic website using simple html, css and js, whereas I had
                learnt html, css, js, react js and backend technologies. That's
                why I had re-create the website once again and take too much
                time to create it. Now I know :
                <br />- how to make our website UI layout.
                <br />- how to write code so that code will be readable and easy
                to understand other developers.
                <br />- how to create svg and how to animate it. As you can see
                the example in my header menu and footer's up and down arrow
                icon.
                <br />- how to read documentations and implement new things.
                <br />- how to use html element and css properties in better
                way.
                <br />- what are the best practices to create a website.
                <br />
                <br />
                Not only this, as I said before, I have learnt react js, Now I
                know :
                <br />- how to use react hook,
                <br />- form handling in react,
                <br />- how to connect backend with frontend using axios, 
                <br />- how to
                use axios to make http requests, 
                <br />- how to create components and
                re-use them, 
                <br />- how to manage state in react using useState and
                useEffect hooks. 
                <br />- how to navigate between pages using
                react-router-dom.
                <br />
                <br />Also i faced lot of challenges to writing backend code. Connecting backend to database was bit difficult for me. But after learning and practicing a lot, now I am able to create backend using node js and express js. I have used node js for js environment and express js for creating server, use resful api to handle http requests in backend. I have used mysql database to store data. 
                <br />
                <br />I have completed it in October 2025. In these five months, I have also learned new technologies like sass, docker, json file, yaml file and vercel deployment during this project development. But I would like thank chatGPT and openAI for helping me a lot to solve my problems and challenges. If I didn't have chatGPT , Maybe I faced more problems, challenges and It took more time to complete this project.
                <br />
                <br />At the the end, I would like to say that, I am very happy to
                complete this project successfully. This is my first full stack. It increased my experiences, confidence and coding skills. I am very excited to create another website in future using sass, react js and new skills.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
