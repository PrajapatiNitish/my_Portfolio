import "./Video.css";

export default function Videos({
  videoSrc,
  videoId,
  videoLabel,
}) {
  return (
    <>
      <div className="video-container">
        <label htmlFor={videoId}>{videoLabel}</label>
        <video controls preload="metadata">
          <source src={videoSrc} id={videoId} />
        </video>
      </div>
    </>
  );
}
