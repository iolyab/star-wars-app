import React, { type ReactNode } from "react";
import classes from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <div className={classes.backLayout} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation}>
        <h2>{title}</h2>
        <p>{children}</p>
        <button onClick={onClose} className={classes.modalBtn}>
          Close
        </button>
      </div>
    </div>
  );
};
