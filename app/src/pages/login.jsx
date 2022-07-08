import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HandleError } from "../components/login/login-error";
import useAuth from "../context/auth-context";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/loginbackground.png") no-repeat center fixed;
  background-size: cover;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 40%;
  height: 40vw;
  min-height: 300px;
  background-color: white;
  border-radius: 10%;
  box-shadow: 0px 20px 30px #00000014;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const LoginInput = styled.input`
  border: none;
  background: #ebf1ef;
  text-align: center;
  margin: 5px 0;
  height: 15%;
  width: 80%;
  border-radius: 5px;
  ::placeholder {
    color: #799283;
  }
`;

const LoginBtn = styled.button`
  font: normal normal 600 14px/21px Poppins;
  border: 2px solid #ebf1ef;
  padding: 2% 5%;
  border-radius: 8px;
  opacity: 1;
  margin: 20px 0 20px 0;
  background-color: white;
  &:hover {
    background-color: #799283;
    color: white;
  }
`;
const LoginIcon = styled.img`
  width: 20%;
`;
const H2 = styled.h2`
  margin-bottom: 10%;
`;

function LogIn() {
  const { login, error } = useAuth();
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const navigate = useNavigate();
  const user = {
    email: myEmail,
    password: myPassword,
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(user) && navigate("/", { replace: true });
  };

  return (
    <PageContainer>
      <LoginContainer>
        <LoginIcon src="/invyologo.png" />
        <H2>Sign In</H2>
        {HandleError(error)}
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            name="email"
            placeholder="Email"
            value={myEmail}
            onChange={(e) => setMyEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            name="password"
            placeholder="Password"
            value={myPassword}
            onChange={(e) => setMyPassword(e.target.value)}
          />
          <LoginBtn data-cy="submit" type="submit">
            LOGIN
          </LoginBtn>
        </LoginForm>
      </LoginContainer>
    </PageContainer>
  );
}

export default LogIn;
