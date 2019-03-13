import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button fa fa-fw fa-cart-arrow-down">
      {/* <i className="fa fa-fw fa-cart-arrow-down" /> */}
    </button>
  );
};

export default Button;
