import "./Connect-Compo.css";
import { useEffect, useRef, useState } from "react";

//Create footer link component
export default function ConnectCompo({ className, linkHeader, allLink }) {
  //Selecting DOM element using useRef hook for triggering animations.
  const upBtn = useRef();
  const downBtn = useRef();
  
  //Selecting links div using useRef hook. to show or hide links.
  const links = useRef();

  const [isOpen, setIsOpen] = useState(false);

  let upToDown = () => {
    if (innerWidth <= 430) {
      isOpen ? downBtn.current.beginElement() : upBtn.current.beginElement();
    }

    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (innerWidth <= 430) {
      isOpen
        ? (links.current.style.display = "flex")
        : (links.current.style.display = "none");
    }
  }, [isOpen]);

  return (
    <>
      <button className="footer-icon-button" onClick={upToDown}>
        <div className={className}>
          <div className="name_icon">
            <span>
              <h2>{linkHeader}</h2>
            </span>

            <span className="footerIcon">
              <svg width="11" height="6" viewBox="0 0 11 6">
                <polyline
                  datafootericonshape=""
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  fillRule="evenodd"
                  points="10.075 0.675 5.5 5.323 0.925 0.675"
                >
                  <animate
                    ref={upBtn}
                    datafooteranimate="expand"
                    attributeName="points"
                    values="10.075 0.675 5.5 5.323 0.925 0.675; 10.075 3 5.5 3 0.925 3; 10.075 5.325 5.5 0.676 0.925 5.325"
                    dur="320ms"
                    begin="indefinite"
                    fill="freeze"
                    keyTimes="0; 0.5;1"
                    calcMode="spline"
                    keySplines="0.12, 0, 0.38, 0;0.2, 1, 0.68, 1"
                  ></animate>
                  <animate
                    ref={downBtn}
                    datafooteranimate="collapse"
                    attributeName="points"
                    values="10.075 5.325 5.5 0.676 0.925 5.325;10.075 3 5.5 3 0.925 3;10.075 0.675 5.5 5.323 0.925 0.675"
                    dur="320ms"
                    begin="indefinite"
                    fill="freeze"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.2, 0, 0.68, 0;0.2, 1, 0.68, 1"
                  ></animate>
                </polyline>
              </svg>
            </span>
          </div>

          <div className="link" ref={links}>
            <ul>{allLink}</ul>
          </div>
        </div>
      </button>
    </>
  );
}
