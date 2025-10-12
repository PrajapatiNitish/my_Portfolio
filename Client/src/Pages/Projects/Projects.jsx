import Achievement from "../../Component/Achievement/Achievements";
import "./Projects.css";

export default function Projects() {
  const achieved = [
    {
      head: "Project - 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis similique vero recusandae voluptas tempora molestiae nobis temporibus dignissimos sint, porro architecto! Quibusdam error velit saepe! Hic sit animi ullam voluptas.",
      link: "none",
      linkName: "View Image",
    },

    {
      head: "Project - 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis similique vero recusandae voluptas tempora molestiae nobis temporibus dignissimos sint, porro architecto! Quibusdam error velit saepe! Hic sit animi ullam voluptas.",
      link: "none",
      linkName: "View Image",
    },

    {
      head: "Project - 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis similique vero recusandae voluptas tempora molestiae nobis temporibus dignissimos sint, porro architecto! Quibusdam error velit saepe! Hic sit animi ullam voluptas.",
      link: "none",
      linkName: "View Image",
    },
  ];

  return (
    <>
      <div className="project-div">
        <div className="project-sub-div">
          <div className="project-header">
            <h2>Projects - Show your skills and works</h2>
          </div>

          <div className="project">
            {achieved.map((achieve) => {
              return (
                <Achievement
                  head={achieve.head}
                  content={achieve.content}
                  link={achieve.link}
                  linkName={achieve.linkName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
