import React, { useState } from "react";
import Toast from "../index";
import heart from "./hear1.svg";
const Toast1 = () => {
  const [first, setFirst] = useState(false);

  return (
    <>
      <Toast
        color="#181919"
        isOpen={first}
        timeout={3000}
        heart={true}
        size="240px"
        icon={<img src={heart} style={{ width: "15px" }} />}
      >
        Lorem ipsum dolor sit
      </Toast>

      <Toast color="#181919" isOpen={first} timeout={3000} heart={false}>
        Lorem ipsum dolor sit
      </Toast>
    </>
  );
};

export default Toast1;
