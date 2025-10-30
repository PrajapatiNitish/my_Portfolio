import "./Skills.css";
import "./Responsive-Skills.css";
import ToolImage from "../../Component/ToolImages/ToolImage";

export default function Skills() {
  const skillsData = [
    {
      skillId: "frontend",
      skillClass: "frontend-skills",
      skillLabel: "Frontend : ",
      tools: [
        {
          toolId: "html",
          toolClass: "html-tool",
          toolLabel: "HTML5",
          toolImageSrc: "./html.png",
        },

        {
          toolId: "css",
          toolClass: "css-tool",
          toolLabel: "CSS3",
          toolImageSrc: "./css-logo.png",
        },

        {
          toolId: "js",
          toolClass: "js-tool",
          toolLabel: "JavaScript",
          toolImageSrc: "./js.png",
        },

        {
          toolId: "react-js",
          toolClass: "react-js-tool",
          toolLabel: "React JS",
          toolImageSrc: "./react-js.svg",
        },

        {
          toolId: "axios",
          toolClass: "axios-tool",
          toolLabel: "Axios",
          toolImageSrc: "./axios.png",
        },
      ],
    },

    {
      skillId: "backend",
      skillClass: "backend-skills",
      skillLabel: "Backend : ",
      tools: [
        {
          toolId: "node-js",
          toolClass: "node-js-tool",
          toolLabel: "Node JS",
          toolImageSrc: "./node-js.png",
        },

        {
          toolId: "express-js",
          toolClass: "express-js-tool",
          toolLabel: "Express JS",
          toolImageSrc: "./express-js.png",
        },
      ],
    },

    {
      skillId: "database",
      skillClass: "database-skills",
      skillLabel: "Database : ",
      tools: [
        {
          toolId: "mysql",
          toolClass: "mysql-tool",
          toolLabel: "MySQL",
          toolImageSrc: "./mysql.png",
        },

        {
          toolId: "mongodb",
          toolClass: "mongodb-tool",
          toolLabel: "MongoDB",
          toolImageSrc: "./mongodb.png",
        },
      ],
    },

    {
      skillId: "version-control",
      skillClass: "version-control-skills",
      skillLabel: "Version Control : ",
      tools: [
        {
          toolId: "git",
          toolClass: "git-tool",
          toolLabel: "Git",
          toolImageSrc: "./git.png",
        },

        {
          toolId: "github",
          toolClass: "github-tool",
          toolLabel: "GitHub",
          toolImageSrc: "./github.svg",
        },
      ],
    },

    {
      skillId: "languages",
      skillClass: "languages-skills",
      skillLabel: "Programming Languages : ",
      tools: [
        {
          toolId: "cpp",
          toolClass: "cpp-tool",
          toolLabel: "C++",
          toolImageSrc: "./cpp.png",
        },

        {
          toolId: "js",
          toolClass: "js-tool",
          toolLabel: "JavaScript",
          toolImageSrc: "./js.png",
        },

        {
          toolId: "python",
          toolClass: "python-tool",
          toolLabel: "Python",
          toolImageSrc: "./python.png",
        },
      ],
    },

    {
      skillId: "other",
      skillClass: "other-skills",
      skillLabel: "Other Skills : ",
      tools: [
        {
          toolId: "docker",
          toolClass: "docker-tool",
          toolLabel: "Docker",
          toolImageSrc: "./docker.png",
        },

        {
          toolId: "vercel",
          toolClass: "vercel-tool",
          toolLabel: "Vercel",
          toolImageSrc: "./vercel-logo.png",
        },

        {
          toolId: "excel",
          toolClass: "excel-tool",
          toolLabel: "Excel",
          toolImageSrc: "./excel.png",
        },
      ],
    },
  ];

  return (
    <>
      <div className="skills-main-div">
        <div className="skills-sub-div">
          <div className="skills-header">
            <h2>Skills matters a lot</h2>
          </div>

          <div className="skills-content-div">
            {skillsData.map((skill) => {
              return (
                <>
                  <p key={skill.skillId}>{skill.skillLabel}</p>
                  <ul key={skill.skillId}>
                    {skill.tools.map((tool) => {
                      return (
                        <ToolImage
                          key={tool.toolId}
                          toolImageId={tool.toolId}
                          toolImageclassName={tool.toolClass}
                          toolImageLabel={tool.toolLabel}
                          toolImageSrc={tool.toolImageSrc}
                        />
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </div>

          <div className="about-skills">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            pariatur neque, veniam quo consectetur possimus praesentium
            repudiandae, aliquam optio necessitatibus eveniet? Eveniet
            perferendis exercitationem recusandae aut quae molestiae, veniam
            accusantium!
          </div>
        </div>
      </div>
    </>
  );
}
