import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./toast.scss";

const Toast = ({
  color = "#D6EDFC",
  children,
  size = "21.6rem",
  textcolor = " #FFFFFF",
  place = "center",
  timeout = 1000,
  isOpen = false,
  icon,
}) => {
  const [visible, setVisible] = useState(false);
  setTimeout(() => {
    setVisible(false);
  }, timeout);
  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);
  console.log(isOpen, "pekk");
  return (
    <>
      {/* {visible && ( */}
      <div className={`toat-outer ${place}`}>
        <div
          className="toast"
          style={{ background: color, width: size, color: textcolor }}
        >
          {icon}
          {children}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Toast;
