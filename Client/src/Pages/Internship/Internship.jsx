import Achievement from "../../Component/Achievement/Achievements";
import "./Internship.css";
import "./Responsive-Internship.css";

export default function Projects() {
  const internships = [
    {
      head: "1) 2nd Rank in Drawing (Group-B)",
      content:
        "We had to draw the scatch of India's formal law's minister and jurist of India ' Dr. Bhimrao Ramji Ambedkar '. I secured 2nd rank in this competition. This competition was organized by ' Shree Vishwabandhy Library, Bakhri ' in year 2017 on Library's 62th Birth Anniversary.",
      link: "none",
      linkName: "View Image",
    },

    {
      head: "1) 2nd Rank in Drawing (Group-B)",
      content:
        "We had to draw the scatch of India's formal law's minister and jurist of India ' Dr. Bhimrao Ramji Ambedkar '. I secured 2nd rank in this competition. This competition was organized by ' Shree Vishwabandhy Library, Bakhri ' in year 2017 on Library's 62th Birth Anniversary.",
      link: "none",
      linkName: "View Image",
    },

    {
      head: "1) 2nd Rank in Drawing (Group-B)",
      content:
        "We had to draw the scatch of India's formal law's minister and jurist of India ' Dr. Bhimrao Ramji Ambedkar '. I secured 2nd rank in this competition. This competition was organized by ' Shree Vishwabandhy Library, Bakhri ' in year 2017 on Library's 62th Birth Anniversary.",
      link: "none",
      linkName: "View Image",
    },
  ];

  return (
    <>
      <div className="internship-div">
        <div className="internship-sub-div">
          <div className="internship-header">
            <h2>Internship - Show your experience</h2>
          </div>

          <div className="internship">
            {internships.map((internship) => {
              return (
                <Achievement
                  head={internship.head}
                  content={internship.content}
                  link={internship.link}
                  linkName={internship.linkName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}