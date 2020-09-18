import React from "react";
import { ModalContext } from "../ModalContext/ModalContext";
import ProfileLight from "../../../images/icons/profile-light.png";
import ProfileDark from "../../../images/icons/profile-dark.png";

const Login = () => {
  let { handleModal } = React.useContext(ModalContext);

  return (
    <>
      <img src={ProfileDark} alt="Log in/register" id="accountModalBtn" onClick={() => handleModal("This is component modal content")}></img>
    </>
  );
};

export default Login;