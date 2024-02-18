/* eslint-disable react/prop-types */
import { useRef } from "react";

function FileUploader({ handleFileSelect }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileSelectInternal = (event) => {
    const selectedFile = event.target.files[0];
    handleFileSelect(selectedFile); // Pass the selected file to the parent component
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    handleFileSelect(droppedFile); // Pass the dropped file to the parent component
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        cursor: "pointer",
        backgroundColor: "white",
        marginBottom: "3rem",
      }}
    >
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileSelectInternal}
      />
      <span>Click or drag a file to this area to upload.</span>
    </div>
  );
}

export default FileUploader;
