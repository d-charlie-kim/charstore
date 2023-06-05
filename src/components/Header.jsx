import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function goLogin() {
    navigate("/loginpage");
  }
  return (
    <SHeader>
      <div></div>
      <div>타이틀입니다</div>
      <div onClick={goLogin}>로그인</div>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0 0 0;
`;
