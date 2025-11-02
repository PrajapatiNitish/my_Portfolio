// import api
import axios from "axios";

import { useState, useRef } from "react";

// import pages and componenet file
import "./MainPage.css";
import "./Responsive-MainPage.css";
import Achievement from "../../Component/Achievement/Achievements";
import Educations from "../../Component/Education/Education";
import InputField from "../../Component/Form/Input/Input";
import Textarea from "../../Component/Form/Textarea/Textarea";
import Button from "../../Component/Form/Button/Button";

// import data file
import achieved from "./AchievementData"; //Achievements
import educations from "./EducationData"; //Educations
import images from "./ImageData"; //images

export default function Main() {
  
  const url = import.meta.env.VITE_API_URL;

  const [response, setResponse] = useState("");
  const sendResponse = useRef();
  const scrollBehaviour = useRef();

  // handle form data like username, email, feedback
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    userfeedback: "",
  });

  // Change value on each typing
  const changeValue = (e) => {
    const { id, value } = e.target; //Extract id and value

    setFormData((prev) => ({
      //change id and value on every typing of user.
      ...prev,
      [id]: value,
    }));
  };

  // Clear value after submitting form.
  const handleClear = () => {
    setFormData({
      username: "",
      useremail: "",
      userfeedback: "",
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${url}/home-page/formdata`, formData).then((res) => {
        if (res.status === 200) {
          sendResponse.current.style.color = "green";
          setResponse(res.data);
          handleClear();
        }
      });
    } catch (err) {
      sendResponse.current.style.color = "red";
      setResponse("Something Error");
    }
  };

  return (
    <>
      <main ref={scrollBehaviour}>
        <div className="main-content">
          {/* Introduction of myself div section. */}
          <div className="intro">
            {/* Welcome msg card */}
            <div className="welcome">
              <div className="space">
                <div className="msg">
                  Developer here - Welcome
                </div>
              </div>
            </div>

            {/* For large screen. */}
            <div className="intro-screen">
              <div className="img">
                <a
                  href="https://github.com/PrajapatiNitish"
                  fetchPriority="high"
                >
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
                    fetchPriority="high"
                  />
                </a>
              </div>

              <div className="intro-content">
                <div className="about-myself">
                  <p>
                    <i>
                      You are on my Profolio Website. You can know about me, my
                      study, my achievements and career in programming world. A
                      transition from Electrical Engg. to Software Devloper and
                      many more on this page.
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mini details about my achievement sections. */}
          <div className="achievements">
            <div className="achievement-header">
              <h1>Achievements show my performances</h1>
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
                    key={achieve.key}
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
              <h1>Educations</h1>
            </div>

            <div className="educations">
              {educations.map((education) => {
                return (
                  <Educations
                    key={education.key}
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
                <form action={`${url}/`} method="POST" onSubmit={handleSubmit}>
                  <InputField
                    type={"text"}
                    placeholder={"Full Name"}
                    inputId={"username"}
                    inputValue={formData.username}
                    changeInput={changeValue}
                    inputMax={30}
                    inputMin={3}
                  />

                  <InputField
                    type={"email"}
                    placeholder={"E-mail"}
                    inputId={"useremail"}
                    inputValue={formData.useremail}
                    changeInput={changeValue}
                    inputMax={30}
                    inputMin={6}
                  />

                  <Textarea
                    textareaId={"userfeedback"}
                    text={"Drop your feedback"}
                    textareaValue={formData.userfeedback}
                    changeTextarea={changeValue}
                  />

                  <Button BtnName={"Submit Feedback"} onClick={handleClear} />
                </form>

                <div className="response" ref={sendResponse}>
                  {response}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
