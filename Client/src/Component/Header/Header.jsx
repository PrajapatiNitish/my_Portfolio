import { useState, useRef, useEffect } from "react";
import "./Header.css";
import "./Responsive-Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  // set dropdown for small screen view.
  const [icon, setIcon] = useState(false); //change state false to true.
  const changeIconStyle = useRef(); //it change parallel icon to cros icon
  const showLink = useRef(); //do display none to visible.
  const bgBlur = useRef();

  let changeIcon = () => {
    //it just change value true <-> flase.
    setIcon(!icon);
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      icon ? true : false;
    }
  }, [icon]);

  return (
    <>
      <header ref={bgBlur}>
        <div className="main-section" ref={changeIconStyle}>
          <nav>
            <div className="navbar">
              <div className="menu">
                <div>
                  <NavLink to={"/"}>
                    <h1>Nitish Prajapati</h1>
                  </NavLink>
                </div>

                <div className="headerIcon" onClick={changeIcon}>
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
                      ></animate>
                    </polyline>
                  </svg>
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
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
