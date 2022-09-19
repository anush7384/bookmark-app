import styled from "styled-components";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Input from "../shared/Input";
import { styles } from "./styles";

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

const GoogleIcon = styled(FcGoogle)`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 850px) {
    height: 90%;
    width: 90%;
  }
`;

const RightSignup = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <styles.FormDiv page="signup">
      <styles.HeadingDiv>
        <styles.BackDiv>
          <IoIosArrowRoundBack size="30px" />
        </styles.BackDiv>
        <styles.HeadDiv>
          <b>Sign Up</b>
        </styles.HeadDiv>
      </styles.HeadingDiv>
      <styles.InputDiv>
        <Input type="text" placeholder="Name" />
      </styles.InputDiv>
      <styles.InputDiv>
        <Input type="text" placeholder="Email" />
      </styles.InputDiv>
      <styles.InputDiv>
        <Input type={show ? "text" : "password"} placeholder="Password" />
        <styles.ShowHideDiv>
          {show ? (
            <HideIcon onClick={showHandler} />
          ) : (
            <ShowIcon onClick={showHandler} />
          )}
        </styles.ShowHideDiv>
      </styles.InputDiv>
      <styles.ConsentDiv>
        <styles.Check type="checkbox" />
        <styles.Para>
          By signing up, you agree to the
          <styles.TermsA href="/terms">
            {" "}
            Terms of Service and Privacy Policy
          </styles.TermsA>
        </styles.Para>
      </styles.ConsentDiv>
      <styles.SignupDiv>
        <styles.Button>Sign Up </styles.Button>
      </styles.SignupDiv>
      <styles.OrDiv>
        <styles.OrP>
          <b>Or with</b>
        </styles.OrP>
      </styles.OrDiv>
      <styles.GoogleDiv>
        <styles.IconDiv>
          <GoogleIcon />
        </styles.IconDiv>
        <styles.Para>
          <styles.CustomB>Sign Up with Google</styles.CustomB>
        </styles.Para>
      </styles.GoogleDiv>
      <styles.LoginDiv>
        <styles.BottomPara>
          Already have an account? <styles.A href="/login">Login</styles.A>
        </styles.BottomPara>
      </styles.LoginDiv>
    </styles.FormDiv>
  );
};

export default RightSignup;
