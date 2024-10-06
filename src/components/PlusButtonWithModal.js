// src/components/PlusButtonWithModal.js
import React, { useState } from "react";
import "../styles/PlusButtonWithModal.css"; // Import the CSS for styling

const PlusButtonWithModal = ({ index = 1 }) => {
  const data = require("../data/text.json");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="plus-button-with-modal">
      <button className="plus-button" onClick={openModal}>
        +
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{data[`img${index}c`]}</h2>
            <p>{data[`img${index}`]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlusButtonWithModal;
