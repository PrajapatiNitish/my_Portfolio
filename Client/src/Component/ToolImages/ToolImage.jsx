import "./ToolImage.css";

export default function ToolImage({
  toolImageclassName,
  toolImageSrc,
  toolImageId,
  toolImageLabel,
}) {
  return (
    <>
      <li className={`toolImage-container ${toolImageclassName}`}>
        <img src={toolImageSrc} alt="tool-image" id={toolImageId} />

          <label htmlFor={toolImageId}>{toolImageLabel}</label>
      </li>
    </>
  );
}
