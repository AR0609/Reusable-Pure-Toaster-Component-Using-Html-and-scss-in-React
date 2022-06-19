import React from "react";
import Toast from "../index";
import heart from "./heart.svg";
const Toast3 = () => {
  return (
    <>
      <Toast
        color="#FFDC91"
        heart={true}
        size="240px"
        textcolor="#484B52"
        icon={<img src={heart} style={{ width: "15px" }} />}
      >
        Lorem ipsum dolor sit
      </Toast>
      <Toast color="#FFDC91" place="bottomright" textcolor="#484B52">
        Lorem ipsum dolor sit
      </Toast>
    </>
  );
};

export default Toast3;
