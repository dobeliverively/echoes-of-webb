// src/components/FileUpload.js
import React, { useState } from "react";
import "../styles/FileUpload.css";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handles file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  // Handles file upload - this would typically call a backend API
  const handleUpload = () => {
    if (selectedFile) {
      // Here you can add functionality to upload the file to a backend server.
      console.log("File to upload:", selectedFile);
      alert("File upload simulated! Check the console for details.");
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      {previewUrl && (
        <div className="file-preview">
          <img
            src={previewUrl}
            alt="Selected file preview"
            style={{ width: "300px", marginTop: "20px" }}
          />
        </div>
      )}
      <button onClick={handleUpload} className="upload-button">
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
