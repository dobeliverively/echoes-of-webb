// src/components/Slideshow.js
import React, { useState, useEffect } from "react";
import "../styles/Tool.css";
import FileUpload from "./FileUpload";

const Tool = () => {
  return (
    <div className="tool">
      <FileUpload />
    </div>
  );
};

export default Tool;
