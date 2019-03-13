import React from "react";

const Modal = ({ status, title, subtitle, onClick, cta }) => {
  return (
    <div className="Modal" data-status={status}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button onClick={onClick}>{cta}</button>
    </div>
  );
};

export default Modal;
