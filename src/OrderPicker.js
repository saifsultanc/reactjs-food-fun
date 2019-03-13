import React from "react";
import { CircleSlider } from "react-circle-slider";
import BreakfastIcon from "./img/breakfast.png";
import LunchIcon from "./img/lunch.png";
import TeaIcon from "./img/tea.png";
import DinnerIcon from "./img/dinner.png";

const OrderPicker = ({ value, meal, onChange }) => {
  return (
    <div>
      <h1>Please select your meal</h1>
      <p id="orderOptionSelectedName">{meal()}</p>
      <br />
      <div id="orderPicker">
        <div id="orderPickerOptionsWrapper">
          <img
            src={BreakfastIcon}
            alt="Breakfast"
            data-name="Breakfast"
            className="img-top"
          />
          <img
            src={LunchIcon}
            alt="Lunch"
            data-name="Lunch"
            className="img-right"
          />
          <img src={TeaIcon} alt="Tea" data-name="Tea" className="img-bottom" />
          <img
            src={DinnerIcon}
            alt="Dinner"
            data-name="Dinner"
            className="img-left"
          />
        </div>
        <div id="orderPickerArrowWrapper">
          <CircleSlider
            value={value}
            size={280}
            circleWidth={5}
            progressWidth={10}
            shadow={true}
            knobColor="#3c918f"
            knobRadius={10}
            stepSize={25}
            // gradientColorFrom="#f0f7f4"
            // gradientColorTo="#99e1d9"
            progressColor="#99e1d9"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
  // }
};

export default OrderPicker;
