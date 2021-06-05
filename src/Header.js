import React from "react";
import styled from "styled-components";

import keepLogo from "../assets/keep-logo.png";
import reactLogo from "../logo.svg";
import firebaseLogo from "../assets/firebase-logo.png";

const Header = () => {
  return (
    <Nav>
      <p>Keep clone</p>
      <ImgWrap>
        <Img src={keepLogo} alt="Google keep logo" />
        <p>+</p>
        <Img src={reactLogo} alt="React logo" />
        <p>+</p>
        <Img src={firebaseLogo} alt="firebase logo" />
      </ImgWrap>
    </Nav>
  );
};

export default Header;
