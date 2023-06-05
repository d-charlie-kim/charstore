import React from "react";
import { useLocation } from "react-router";

const MainPage = () => {
  const location = useLocation();
  const userInfo = location.state;

  console.log(userInfo);

  return (
    <div>
      <div>로그인 성공 했습니다.</div>
      <div>당신의 정보는 {userInfo.username} 입니다</div>
    </div>
  );
};

export default MainPage;
