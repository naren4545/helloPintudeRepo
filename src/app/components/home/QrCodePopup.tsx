"use client";

import { useState } from "react";
import qr from "../../assests/qr.png";
import { createPortal } from "react-dom";
interface CustomSectionProps {
 isOpen: boolean; // Define prop types
 onClose:() => void
}

const Dialog: React.FC<CustomSectionProps> = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? "popup-overlay" : ""}>
      <dialog open={isOpen} className="dialogn p-6 rounded-2xl">
        <div className="dialog-header">
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>
        <div className="dialog-body">
          <div className="pt-12 text-center">
            <img src={qr.src} />

            <p className="text-center pt-7">
              Scan this qr to call on this number +91 82373 58619{" "}
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Dialog