import React from "react";
import classes from "./modal.module.scss";

export const Modal = ({ onClose, title, children }) => {
  return (
    <div className={classes.backLayout}>
      <div className={classes.modal}>
        <h2>{title}</h2>
        <p>{children}</p>
        <button onClick={onClose} className={classes.modalBtn}>
          Close
        </button>
      </div>
    </div>
  );
};
