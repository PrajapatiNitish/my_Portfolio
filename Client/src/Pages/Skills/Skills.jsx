import React from "react";
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
          toolImageSrc: "./html.webp",
        },

        {
          toolId: "css",
          toolClass: "css-tool",
          toolLabel: "CSS3",
          toolImageSrc: "./css-logo.webp",
        },

        {
          toolId: "js",
          toolClass: "js-tool",
          toolLabel: "JavaScript",
          toolImageSrc: "./js.webp",
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
          toolImageSrc: "./axios.webp",
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
          toolImageSrc: "./node-js.webp",
        },

        {
          toolId: "express-js",
          toolClass: "express-js-tool",
          toolLabel: "Express JS",
          toolImageSrc: "./express-js.webp",
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
          toolImageSrc: "./mysql.webp",
        },

        {
          toolId: "mongodb",
          toolClass: "mongodb-tool",
          toolLabel: "MongoDB",
          toolImageSrc: "./mongodb.webp",
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
          toolImageSrc: "./git.webp",
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
          toolImageSrc: "./cpp.webp",
        },

        {
          toolId: "js",
          toolClass: "js-tool",
          toolLabel: "JavaScript",
          toolImageSrc: "./js.webp",
        },

        {
          toolId: "python",
          toolClass: "python-tool",
          toolLabel: "Python",
          toolImageSrc: "./python.webp",
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
          toolImageSrc: "./docker.webp",
        },

        {
          toolId: "vercel",
          toolClass: "vercel-tool",
          toolLabel: "Vercel",
          toolImageSrc: "./vercel-logo.webp",
        },

        {
          toolId: "excel",
          toolClass: "excel-tool",
          toolLabel: "Excel",
          toolImageSrc: "./excel.webp",
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

          <div className="about-skills about-skills-top">
            Over the years, I have built strong foundation in both frontend and
            backend of web devlopment. I have created a project (my portfolio
            website) and also show in project section.
            <br />
            <br />
            On the frontend, I learn to creat clean, responsive and interactive
            interfaces using HTML, CSS, JavaScript and a frontend framework
            React JS, while for handling API calls in frontend I use Axios.
            <br /> On the backend, I've work with Node.js to build js backend
            environment and Express Js to ensure smooth interaction between
            client and server and use Restfull API to http call. I have learn
            two Databases, First MySQL as Relational Database and second MongoDB
            as Non-Realtional Database to smooth data storing and managing.
          </div>

          <div className="skills-content-div">
            {skillsData.map((skill) => {
              return (
                <React.Fragment key={skill.skillId}>
                  <p>{skill.skillLabel}</p>
                  <ul>
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
                </React.Fragment>
              );
            })}
          </div>

          <div className="about-skills about-skills-bottom">
            I use Git and GitHub version control for teamwork, Docker for
            containerizaion and Vercel for deployment. Also learned excel and
            use chatGPT for increase my productivity. Parallelly of Website
            Develoment, I am expanding my programming and logic building skills
            with Data structures and algorithms using C++ language.
          </div>
        </div>
      </div>
    </>
  );
}
