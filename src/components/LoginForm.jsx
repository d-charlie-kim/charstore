import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();

  const [LoginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    login_type: "BUYER",
  });

  function loginProcess(e) {
    e.preventDefault();
    loginHandle();
  }

  async function loginHandle() {
    try {
      const response = await fetch(
        "https://openmarket.weniv.co.kr/accounts/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(LoginInfo),
        }
      );

      if (!response.ok) {
        console.log(LoginInfo);
        alert("확인 좀 하세요 제발");
      } else {
        navigate("/mainpage", { state: LoginInfo });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={loginProcess}>
      <label htmlFor="id"></label>
      <input
        id="id"
        type="text"
        onChange={(e) =>
          setLoginInfo({ ...LoginInfo, username: e.target.value })
        }
      />
      <label htmlFor="password"></label>
      <input
        id="password "
        type="password"
        onChange={(e) => {
          setLoginInfo({ ...LoginInfo, password: e.target.value });
        }}
      />
      <button>로그인 버튼</button>
    </form>
  );
};

export default LoginForm;
