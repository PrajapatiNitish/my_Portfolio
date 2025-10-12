import { useState, useRef, useEffect } from "react";
import "./Header.css";
import "./Responsive-Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { to: "/Skills", label: "Skills", class: "staggered-link" },
    { to: "/Projects", label: "Projects", class: "staggered-link" },
    { to: "/Internship", label: "Internship", class: "staggered-link" },
    { to: "/Issues", label: "Issues", class: "staggered-link" },
  ];

  // set dropdown for small screen view.
  let [isBtnClicked, setIsBtnClicked] = useState(true); //change state false to true.

  const applyAnim = useRef(); //apply animation on header when page load.

  //Selecting DOM element using useRef hook for triggering animations.
  const openBottomBtnAnim = useRef();
  const closeBottomBtnAnim = useRef();
  const openTopBtnAnim = useRef();
  const closeTopBtnAnim = useRef();

  //Accessing DOM element using useRef hook.
  let showLink = useRef(null); //do display none to visible.

  useEffect(() => {
    const links = showLink.current.querySelectorAll(".staggered-link");

    // Apply animation delay on animation
    links.forEach((link, i) => {
      link.style.animationDelay = `${i * 0.1}s`;
    });
  }, [isBtnClicked]);

  //create object of all animation's button. so that we can easily access them.
  //object contain two object openBtnAnim and closeBtnAnim.
  //each object contain two reference of animation.
  const animBtn = {
    openBtnAnim: {
      openBottomBtnAnim: openBottomBtnAnim,
      openTopBtnAnim: openTopBtnAnim,
    },

    closeBtnAnim: {
      closeBottomBtnAnim: closeBottomBtnAnim,
      closeTopBtnAnim: closeTopBtnAnim,
    },
  };

  let changeIcon = () => {
    //it just change value true <-> flase.
    if (window.innerWidth <= 1024) {
      let btnState = isBtnClicked ? animBtn.openBtnAnim : animBtn.closeBtnAnim;

      for (let key in btnState) {
        btnState[key].current.beginElement();
      }
    }

    setIsBtnClicked(!isBtnClicked);
    console.log(isBtnClicked);
  };

  //Close link div after clicking on any link.
  const closeLink = async () => {
    if (window.innerWidth <= 1024 && isBtnClicked == false) {
      changeIcon();
    }
  };
  //whenever isBtnClicked state change this useEffect will run.
  //it will show or hide the nav link.

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      isBtnClicked
        ? {
            linkNotActive: {
              displayNone: (showLink.current.style.display = "none"),
              srinkHeight: (applyAnim.current.style.height = "4rem"),
            },
          }
        : {
            linkActive: {
              displayflex: (showLink.current.style.display = "flex"),
              increaseheight: (applyAnim.current.style.height = "100vh"),
              changeOpacity: (showLink.current.style.opacity = "1"),
            },
          };
    }
  }, [isBtnClicked]);

  return (
    <>
      <header>
        <div className="main-section" ref={applyAnim}>
          <nav>
            <div className="navbar">
              <div className="menu">
                <div className="header-space" onClick={closeLink}>
                  <NavLink to={"/"}>
                  <img src="./header-icon.jpg" alt="header-img" />
                    <h1>Nitish Prajapati</h1>
                  </NavLink>
                </div>

                <div className="headerIcon">
                  <button
                    aria-label="Close"
                    className="poly-anim-btn"
                    onClick={changeIcon}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18">
                      <polyline
                        id="nav-poly-bottom-btn"
                        className="nav-poly-btn"
                        points="2 12, 16 12"
                        fill="none"
                        stroke="black"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <animate
                          id="nav-poly-bottom-btn-anim-open"
                          attributeName="points"
                          keyTimes="0;0.5;1"
                          dur="0.25s"
                          begin="indefinite"
                          fill="freeze"
                          calcMode="spline"
                          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                          values="2 12, 16 12; 2 9, 16 9; 3 15, 15 3"
                          ref={openBottomBtnAnim}
                        ></animate>
                        <animate
                          id="nav-poly-bottom-btn-anim-close"
                          attributeName="points"
                          keyTimes="0;0.5;1"
                          dur="0.25s"
                          begin="indefinite"
                          fill="freeze"
                          calcMode="spline"
                          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                          values="3 15, 15 3; 2 9, 16 9; 2 12, 16 12"
                          ref={closeBottomBtnAnim}
                        ></animate>
                      </polyline>

                      <polyline
                        id="nav-poly-top-btn"
                        className="nav-poly-btn"
                        points="2 5, 16 5"
                        fill="none"
                        stroke="black"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <animate
                          id="nav-poly-top-btn-anim-close"
                          attributeName="points"
                          keyTimes="0; 0.5; 1"
                          dur="0.25s"
                          begin="indefinite"
                          fill="freeze"
                          calcMode="spline"
                          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                          values="2 5, 16 5; 2 9, 16 9; 3 3, 15 15"
                          ref={openTopBtnAnim}
                        ></animate>
                        <animate
                          id="nav-poly-top-btn-anim-close"
                          attributeName="points"
                          keyTimes="0; 0.5; 1"
                          dur="0.25s"
                          begin="indefinite"
                          fill="freeze"
                          calcMode="spline"
                          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                          values="3 3, 15 15; 2 9, 16 9; 2 5, 16 5"
                          ref={closeTopBtnAnim}
                        ></animate>
                      </polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="navigate-link" ref={showLink} onClick={closeLink}>
                {navLinks.map((li) => {
                  return (
                    <span key={li.label} className={li.class}>
                      <NavLink to={li.to}>{li.label}</NavLink>
                    </span>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
