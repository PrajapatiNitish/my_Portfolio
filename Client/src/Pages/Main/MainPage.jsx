import "./MainPage.css";
import "./Responsive-MainPage.css";
import Achievement from "../../Component/Achievement/Achievements";
import Educations from "../../Component/Education/Education";
import Form from "../../Component/Form/Form";

// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

export default function Main() {
  // Fatch data from backend
  // useEffect(() => {
  //     axios.get('/api/')
  //         .then((res) => {
  //             console.log("Data arrived")
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         })
  // })

  // Create objec of array
  const images = [
    {
      desktopImage: "github-desk.png",
      tabletImage: "github-pd.png",
      mobileImage: "github-mb.jpg",
    },
  ];

  // Achievement objects of array.
  const achieved = [
    {
      head : "1) 2nd Rank in Drawing (Group-B)",
      content : "We had to draw the scatch of India's formal law's minister and jurist of India ' Dr. Bhimrao Ramji Ambedkar '. I secured 2nd rank in this competition. This competition was organized by ' Shree Vishwabandhy Library, Bakhri ' in year 2017 on Library's 62th Birth Anniversary.",
      link : "none",
      linkName : "View Image",
    },

    {
      head : "2) 3rd Rank in Quiz Competition",
      content : "This competition was organized in year 2018 with consent of hometown's all coaching institutions. Student's selction was based on their class test's marks. Also Institute had boundary to select only 10 students. I got selected for this compition. The questions based on 10th syllabus text book in this quiz and I secured 3rd rank in this competition.",
      link : "none",
      linkName : "View Image",
    },

    {
      head : "3) 3rd Rank in Essay Writing (Group-C)",
      content : "We had to write an essay on ' Side effect of western culture on india '. I secured 3rd rank in this competition. This competition was also organized by ' Shree Vishwabandhy Library, Bakhri ' in year 2022 on Library's 68st Birth Anniversary.",
      link : "none",
      linkName : "View Image",
    },
  ];

  //Educations objects of arary.
  const educations = [
    {
      educationHead : "B.Tech in Computer Science & Engineering",
      educationContent : 
                  "Pursuing batchlor from Faridabad College of Engineering and Management, Faridabad in from August 2025 to June 2028"
    },

    {
      educationHead : "Diploma in Electrical Engineering",
      educationContent : "Completed from Kameshwar Narayan Singh Government Polytechnic (K.N.S.G.P), Samastipur, Bihar with 7.69 CGPA in 2018-2022",
    },

    {
      educationHead : "Matriculation (10th)",
      educationContent : "Completed from Ayodhya Raj Kumari High School (A.R.K High School), Kumharson, Begusarai, with 62.8% in 2017-2018",
    },
  ]

  return (
    <>
      <main>
        <div className="main-content">
          {/* Introduction of myself div section. */}
          <div className="intro">
            {/* Welcome msg card */}
            <div className="welcome">
              <div className="space">
                <div className="msg">Let's Know about Me and my journey.</div>
              </div>
            </div>

            {/* For large screen. */}
            <div className="intro-screen">
              <div className="img">
                <a href="https://github.com/PrajapatiNitish">
                  <img
                    src={images.map((img) => {
                      if (window.innerWidth <= 430) {
                        return img.mobileImage;
                      }

                      if (window.innerWidth <= 1024) {
                        return img.tabletImage;
                      }

                      if (window.innerWidth > 1024) {
                        return img.desktopImage;
                      }
                    })}
                    alt="display-img"
                  />
                </a>
              </div>

              <div className="intro-content">
                <div className="about-myself">
                  <p>
                    <i>
                      I am <b>Nitish Prajapati</b>. You are on my Profolio
                      Website. You can know about me on this page, about my
                      study, my achievements and career in programming world. A
                      transition from Electrical Engg. to Software Devloper and
                      many more.
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini details about my achievement sections. */}
          <div className="achievements">
            <div className="achievement-header">
              <h1>Achievements - Show The Aura</h1>
            </div>

            <div className="about-achievement">
              <p>
                The journey since childhood, I have achieved lots of
                achievements but These three are memorable moments for me.
              </p>
            </div>

            <div className="achievements-content">
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

          <div className="education-div">
            <div className="education-header">
              <h1>Educations - Give you another eye</h1>
            </div>

            <div className="educations">
              {educations.map((education) => {
                return (
                  <Educations
                    educationHead={education.educationHead}
                    educationContent={education.educationContent}
                  />
                );
              })}
            </div>
          </div>

          <div className="feedback-div">
            <div className="feedback-content-div">
              <div className="feedback-head">
                <h1>
                  Give me, your valueable feedback. I respect you thoughts.
                </h1>
              </div>
            </div>

            <div className="feedback-content-div">
              <div className="feedback-content">
                <Form onSubmit={() => console.log("Successful submit.")} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
