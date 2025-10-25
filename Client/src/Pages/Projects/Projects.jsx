import Achievement from "../../Component/Achievement/Achievements";
import "./Projects.css";
import "../../TextData/VideoData"

export default function Projects() {
  // const achieved = [
  //   {
  //     head: "Project - 1",
  //     content: () => {
  //       return (
  //         <>
  //           <h1>Hi, Nitish Here for check</h1>
  //           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, animi odit quidem, nobis dolorem consequuntur voluptate hic magnam soluta qui distinctio esse cum consequatur doloribus. Voluptates reprehenderit repudiandae ipsum? Itaque.</p>
  //         </>
  //       );
  //     },
  //     link: "none",
  //     linkName: "",
  //   },
  // ];

  return (
    <>
      <div className="project-div">
        <div className="project-sub-div">
          <div className="project-header">
            <h2>Projects - Showing my works</h2>
          </div>

          <div className="project">
            {/* {achieved.map((achieve) => {
              return (
                <Achievement
                  head={achieve.head}
                  content={achieve.content}
                  link={achieve.link}
                  linkName={achieve.linkName}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}
