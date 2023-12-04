import React from "react";
import styled from "styled-components";

const StRegisterPage = styled.div`
  background-color: #d1cec6;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StRegisterWrap = styled.div`
  width: 500px;
  height: 370px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
`;

const StRegister = styled.p`
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

const StNicName = styled.input`
  width: 100%;
  display: block;
  margin: 20px 0px;
  padding: 10px 0px;
  border: solid 0px;
  border-bottom: solid 0.5px;
`;

const StRegisterButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #d1cec6;
  border: solid 1px;
  cursor: pointer;
`;

const StLoginButton = styled.button`
  width: 100%;
  margin: 15px auto;
  border: solid 0px;
  color: #c2b7b7;
  cursor: pointer;
`;

function Register() {
  function LoginClickHandler(e) {
    window.location.replace("/login");
  }
  return (
    <StRegisterPage>
      <StRegisterWrap>
        <StRegister>회원가입</StRegister>
        <StId type="text" placeholder="아이디(4~10글자)" minLength={4} maxLength={10} />
        <StPassword type="password" placeholder="비밀번호(4~15글자)" minLength={4} maxLength={15} />
        <StNicName type="text" placeholder="닉네임(1~10글자)" minLength={1} maxLength={10}></StNicName>
        <StRegisterButton>회원가입</StRegisterButton>
        <StLoginButton onClick={LoginClickHandler}>로그인</StLoginButton>
      </StRegisterWrap>
    </StRegisterPage>
  );
}

export default Register;
