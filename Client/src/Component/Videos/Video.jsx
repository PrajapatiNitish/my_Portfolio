import "./Video.css";

export default function Videos({ videoSrc, videoId, videoLabel, videoClass }) {
  return (
    <>
      <div className={`video-container ${videoClass}`}>
        <label htmlFor={videoId}>{videoLabel}</label>
        <video controls preload="metadata">
          <source src={videoSrc} id={videoId} />
        </video>
      </div>
    </>
  );
}
