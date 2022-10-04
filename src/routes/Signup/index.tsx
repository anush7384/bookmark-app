import { Fragment } from "react";
import styled from "styled-components";

import RightSignup from "./../../components/RightSignup/index";
import style from "./style";

const logo: string =
  require("./../../utils/Images/Signup/signup_image.svg").default;

export const RightContainer = styled.div`
  height: 100%;
  width: 40%;
  background-color: #ffffff;
`;

export const Container = styled.div`
  height: 100%;
  width: 99%;
  display: flex;
  flex-direction: row;
`;

export const LeftPage = () => {
  return (
    <style.LeftContainer>
      <style.HeadDiv>
        Welcome,<b> Get Started</b>
      </style.HeadDiv>
      <style.ImageDiv>
        <style.Image src={logo} alt="logo" />
      </style.ImageDiv>
    </style.LeftContainer>
  );
};

const Signup = () => {
  return (
    <Fragment>
      <Container>
        <LeftPage />
        <RightContainer>
          <RightSignup />
        </RightContainer>
      </Container>
    </Fragment>
  );
};

export default Signup;
