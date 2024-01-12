import React, { useState, useEffect } from "react";
import style from "@/styles/Main/modal.module.scss";

const Modal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the modal after a short delay to ensure the initial state is applied for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(style.modalOverlay)) {
      setIsVisible(false);
      setTimeout(() => {
        onClose();
      }, 300); // Wait for the transition to complete before closing
    }
  };
  return (
    <div
      className={`${style.modalOverlay} ${isVisible ? style.modalVisible : ""}`}
      onClick={handleClickOutside}>
      <div
        className={`${style.modalContent} ${
          isVisible ? style.modalVisible : ""
        }`}>
        <h2>leave me a message!</h2>
        <form action="">
          <div className={style.inputhead}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="from"
              required
            />
            <p>to Nalendras email</p>
          </div>
          <div className={style.subject}>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              required
            />
            <textarea id="message" name="message" required></textarea>
          </div>
        </form>
        <button>send</button>
      </div>
    </div>
  );
};

export default Modal;
