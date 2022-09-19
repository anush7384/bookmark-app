import styled from "styled-components";
import { useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Container } from "../Signup";
import { LeftPage } from "../Signup";
import Input from "../../components/shared/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RightContainer } from "../Signup";
import { styles } from "./../../components/RightSignup/styles";

const ShowHideDiv = styled.div`
  width: 13%;
  height: 40%;
  margin-top: 3.5%;
  @media screen and (max-width: 900px) {
    margin-top: 7%;
    margin-left: 3%;
  }
  @media screen and (max-width: 600px) {
    margin-top: 4.5%;
    margin-left: 0;
  }
  @media screen and (max-width: 400px) {
    margin-top: 7%;
  }
`;

const ShowIcon = styled(FaRegEye)`
  width: 100%;
  color: grey;
  opacity: 60%;
  @media screen and(max-width:400px) {
    width: 10%;
  }
`;
const HideIcon = styled(FaRegEyeSlash)`
  width: 100%;
  color: grey;
  opacity: 60%;
  @media screen and(max-width:400px) {
    width: 50%;
  }
`;
const ForgotDiv = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  font-size: medium;
`;
const ForgotA = styled.a`
  color: #5352ed;
  text-decoration: none;
`;
const NoPara = styled.p`
  color: #91919f;
  @media screen and (max-width: 400px) {
    font-size: small;
  }
  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
  @media screen and (max-width: 865px) {
    font-size: 13px;
    margin-top: 2%;
  }
`;
const Login = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };

  return (
    <Container>
      <LeftPage />
      <RightContainer>
        <styles.FormDiv page="login">
          <styles.HeadingDiv>
            <styles.BackDiv>
              <IoIosArrowRoundBack size="30px" />
            </styles.BackDiv>
            <styles.HeadDiv>
              <b>Log In</b>
            </styles.HeadDiv>
          </styles.HeadingDiv>
          <styles.InputDiv>
            <Input placeholder="Email" />
          </styles.InputDiv>
          <styles.InputDiv>
            <Input type={show ? "text" : "password"} placeholder="Password" />
            <ShowHideDiv>
              {show ? (
                <HideIcon onClick={showHandler} />
              ) : (
                <ShowIcon onClick={showHandler} />
              )}
            </ShowHideDiv>
          </styles.InputDiv>
          <styles.SignupDiv>
            <styles.Button>Login</styles.Button>
          </styles.SignupDiv>
          <ForgotDiv>
            <div>
              <ForgotA href="/forgot">forgot password</ForgotA>
            </div>
          </ForgotDiv>
          <styles.LoginDiv>
            <NoPara>
              Don't have an account yet? <styles.A href="/">Sign Up</styles.A>
            </NoPara>
          </styles.LoginDiv>
        </styles.FormDiv>
      </RightContainer>
    </Container>
  );
};

export default Login;
