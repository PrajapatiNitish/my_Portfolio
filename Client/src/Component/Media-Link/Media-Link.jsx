import "./Media-Link.css";

export default function MediaLink({ link, linkName }) {

  return (
    <>
      <div className="media-link">
        <a href={link} target="blank">
          {linkName}
        </a>
      </div>
    </>
  );
}
