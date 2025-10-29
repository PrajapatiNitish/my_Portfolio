import "./Projects.css";
import "./Responsive-Project.css";
import ProjectData from "../../TextData/ProjectData";
import Videos from "../../Component/Videos/Video";
import ToolImage from "../../Component/ToolImages/ToolImage";

export default function Projects() {
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
                  Short Desprition - Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Numquam repellendus hic necessitatibus
                  earum. Deserunt eveniet quo beatae sit soluta perferendis
                  dolores, doloribus veniam, cumque quisquam corporis eum eos.
                  Ratione, maiores?
                </p>
              </div>

              <div className="project-view">
                {ProjectData.videos.map((video) => {
                  return (
                    <Videos
                      key={video.videoId}
                      videoSrc={video.videoSrc}
                      videoId={video.videoId}
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
                  {ProjectData.images.map((image) => {
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
                  ;
                </div>
              </div>

              <div className="full-descriptions-and-progress">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                dolor ipsam, iusto repellat, deserunt blanditiis sint nisi quasi
                quas consequatur labore ipsum et harum nobis nulla eius. Sint
                facilis numquam repellat optio corporis eos autem itaque
                possimus nihil assumenda consequuntur quae quasi exercitationem,
                veritatis commodi?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
