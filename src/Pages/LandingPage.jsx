import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/char_logologo.png";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <SLanding>
      <div className="landingPage">
        <Link to="/homepage">
          <img src={Logo} alt="CHAR_LOGO" />
        </Link>
      </div>
    </SLanding>
  );
};

export default LandingPage;

const SLanding = styled.div`
  .landingPage {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
