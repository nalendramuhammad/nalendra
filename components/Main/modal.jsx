import React from "react";
import style from "@/styles/Main/modal.module.scss";

const Modal = ({ onClose }) => {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains(style.modalOverlay)) {
      onClose();
    }
  };
  return (
    <div className={style.modalOverlay} onClick={handleClickOutside}>
      <div className={style.modalContent}>
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
