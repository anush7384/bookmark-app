import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Fragment } from "react";
import styled from "styled-components";

import { signUp } from "../../store/actions/index";
import RightSignup from "./../../components/RightSignup/index";

const logo:string = require('./../../utils/Images/Signup/signup_image.svg').default; 
interface propsType {
  signUp: (obj: objectType) => void;
}

const LeftContainer = styled.div`
  height: 100%;
  width: 60%;
  background: linear-gradient(to right, #5352ed 65%, #ffffff 65%);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 40%;
  background-color: #ffffff;
`;

const HeadDiv = styled.div`
  width: 20%;
  height: 5%;
  margin-top: 7%;
  margin-left: 13%;
  word-wrap: breakword;
  font-size: xx-large;
  color: #ffffff;
  font-family: "Inter", sans-serif;
`;
const ImageDiv = styled.div`
  width: 80%;
  margin-left: 14%;
  height:80%;
`;

export const Container = styled.div`
  height: 100%;
  width: 99%;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
width:100%;
height:100%;
`


export const LeftPage = () =>{
  return (
    <LeftContainer>
      <HeadDiv>
        Welcome,<b> Get Started</b>
      </HeadDiv>
      <ImageDiv>
        <Image src={logo} alt="logo"/>
      </ImageDiv>
    </LeftContainer>
  );
}
const Signup = (props: propsType) => {
  return (
    <Fragment>
      <Container>
        <LeftPage/>
        <RightContainer>
          <RightSignup />
        </RightContainer>
      </Container>
    </Fragment>
  );
};

interface objectType {
  name: string;
  userName: string;
  password: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (obj: objectType) => dispatch(signUp(obj)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
