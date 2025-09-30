import "./Connect-Compo.css";

//Create footer link component
export default function ConnectCompo({
  className,
  linkHeader,
  mouseClick,
  funcOfElement,
  allLink,
}) {
  return (
    <>
      <div className={className}>
        <div className="name_icon">
          <span>
            <h2>{linkHeader}</h2>
          </span>

          <span className="footerIcon" onClick={mouseClick}>
            <svg
              className="footer-icon-svg"
              width="11"
              height="6"
              viewBox="0 0 11 6"
            >
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
                  datafooteranimate="expand"
                  attributeName="points"
                  values="10.075 0.675 5.5 5.323 0.925 0.675;
					10.075 3 5.5 3 0.925 3;
					10.075 5.325 5.5 0.676 0.925 5.325"
                  dur="320ms"
                  begin="indefinite"
                  fill="freeze"
                  keyTimes="0;
					0.5;
					1"
                  calcMode="spline"
                  keySplines="0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1"
                ></animate>
                <animate
                  datafooteranimate="collapse"
                  attributeName="points"
                  values="10.075 5.325 5.5 0.676 0.925 5.325;
					10.075 3 5.5 3 0.925 3;
					10.075 0.675 5.5 5.323 0.925 0.675"
                  dur="320ms"
                  begin="indefinite"
                  fill="freeze"
                  keyTimes="0;
					0.5;
					1"
                  calcMode="spline"
                  keySplines="0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1"
                ></animate>
              </polyline>
            </svg>
          </span>
        </div>

        <div className="link">
          <ul>{allLink}</ul>
        </div>
      </div>
    </>
  );
}
