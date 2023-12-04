import React from "react";
import styled from "styled-components";

const StLoginPage = styled.div`
  background-color: #d1cec6;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLoginWrap = styled.div`
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
`;

const StLogin = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;

const StId = styled.input`
  width: 100%;
  display: block;
  margin: 20px 0px;
  padding: 10px 0px;
  border: solid 0px;
  border-bottom: solid 0.5px;
`;

const StPassword = styled.input`
  width: 100%;
  display: block;
  margin: 30px 0px;
  padding: 10px 0px;
  border: solid 0px;
  border-bottom: solid 0.5px;
`;

const StLoginButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #d1cec6;
  border: solid 1px;
`;

const StRegisterButton = styled.button`
  width: 100%;
  margin: 10px auto;
  border: solid 0px;
  color: #c2b7b7;
  cursor: pointer;
`;

function Login() {
  function RegisterButtonHandler(e) {
    window.location.replace("/register");
  }
  return (
    <StLoginPage>
      <StLoginWrap>
        <StLogin>로그인</StLogin>
        <StId type="text" placeholder="아이디(4~10글자)" maxLength={10} minLength={4} />
        <StPassword type="password" placeholder="비밀번호(4~15글자)" maxLength={15} />
        <StLoginButton>로그인</StLoginButton>
        <StRegisterButton onClick={RegisterButtonHandler}>회원가입</StRegisterButton>
      </StLoginWrap>
    </StLoginPage>
  );
}

export default Login;
