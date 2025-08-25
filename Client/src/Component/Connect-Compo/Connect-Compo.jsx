// Store svg icon LInk
const svgLink = {
  upSvgLink: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="up"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  ),

  downSvgLink: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="down"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
};

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
            <h3>{linkHeader}</h3>
          </span>

          <span className="footerIcon" onClick={mouseClick}>
            {funcOfElement ? svgLink.upSvgLink : svgLink.downSvgLink}
          </span>
        </div>

        <div className="link">{allLink}</div>
      </div>
    </>
  );
}
