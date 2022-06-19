import heart from "./heart.svg";
import React, { useState } from "react";
import Toast from "../index";

const Toast2 = () => {
  const [first, setFirst] = useState(false);
  return (
    <div>
      <Toast
        color="#8EF9B3"
        isOpen={first}
        timeout={3000}
        heart={true}
        size="240px"
        textcolor="#484B52"
        icon={<img src={heart} style={{ width: "15px" }} />}
      >
        Lorem ipsum dolor sit
      </Toast>
      <Toast color="#8EF9B3" textcolor="#484B52">
        Lorem ipsum dolor sit
      </Toast>
    </div>
  );
};

export default Toast2;
