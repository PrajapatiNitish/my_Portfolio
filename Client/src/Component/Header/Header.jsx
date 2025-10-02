import { useState, useRef, useEffect } from "react";
import "./Header.css";
import "./Responsive-Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  // set dropdown for small screen view.
  const [isBtnClicked, setIsBtnClicked] = useState(true); //change state false to true.

  //Accessing DOM element using useRef hook.
  const showLink = useRef(); //do display none to visible.

  //Selecting DOM element using useRef hook for triggering animations.
  const openBottomBtnAnim = useRef();
  const closeBottomBtnAnim = useRef();
  const openTopBtnAnim = useRef();
  const closeTopBtnAnim = useRef();

  //create object of all animation's button. so that we can easily access them.
  //object contain two object openBtnAnim and closeBtnAnim.
  //each object contain two reference of animation.
  const animBtn = {
    openBtnAnim: {
      openBottomBtnAnim : openBottomBtnAnim,
      openTopBtnAnim : openTopBtnAnim,    
    },

    closeBtnAnim: {
      closeBottomBtnAnim : closeBottomBtnAnim,
      closeTopBtnAnim : closeTopBtnAnim,
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
  };

  //whenever isBtnClicked state change this useEffect will run.
  //it will show or hide the nav link.

  useEffect(() => {
    if(window.innerWidth <= 1024)  {
      isBtnClicked
        ? {
            linkNotActive: (showLink.current.style.display = "none"),
          }
        : {
            linkActive: (showLink.current.style.display = "flex"),
          };
    }
  }, [isBtnClicked]);

  return (
    <>
      <header>
        <div className="main-section">
          <nav>
            <div className="navbar">
              <div className="menu">
                <div className="header-space">
                  <NavLink to={"/"}>
                    <h1>Nitish Prajapati</h1>
                  </NavLink>
                </div>

                <div className="headerIcon">
                  <button className="poly-anim-btn" onClick={changeIcon}>
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

              <div className="navigate-link" ref={showLink}>
                <span>
                  <NavLink to={"/Skills"}>Skills</NavLink>
                </span>
                <span>
                  <NavLink to={"/Projects"}>Projects</NavLink>
                </span>
                <span>
                  <NavLink to={"/Internship"}>Internship</NavLink>
                </span>
                <span>
                  <NavLink to={"/Iussues"}>issues</NavLink>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
