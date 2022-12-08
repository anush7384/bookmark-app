import styled from "styled-components";

const style = {
  ShowHideDiv: styled.div`
    width: 13%;
    height: 40%;
    margin-top: 3.5%;
    :hover {
      cursor: pointer;
    }
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
  `,

  ForgotDiv: styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    font-size: medium;
  `,
  ForgotA: styled.a`
    color: #5352ed;
    text-decoration: none;
  `,
  NoPara: styled.p`
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
  `,
  SpinDiv: styled.div`
    display: flex;
    justify-content: center;
  `,

  Div: styled.div`
    margin-top: 15%;
  `,
};

export default style;
