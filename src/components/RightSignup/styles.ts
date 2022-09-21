import styled from "styled-components";

interface formProps {
  page: "login" | "signup";
}

export const styles = {
  FormDiv: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    border-radius: 5px;
    padding-bottom: 2%;
    margin-top: ${(props: formProps) =>
      props.page === "login" ? "25%" : "10%"};
    font-family: "Inter", sans-serif;
    @media screen and (max-width: 600px) {
      margin-left: 50%;
      width: 150%;
    }
    @media screen and (max-width: 500px) {
      margin-top: ${(props: formProps) =>
        props.page === "login" ? "65%" : "45%"};
    }
    @media screen and (max-width: 400px) {
      width: 200%;
      margin-left: 17%;
    }
  `,

  InputDiv: styled.div`
    height: 50px;
    width: 100%;
    margin-top: 5%;
    border: 1px solid #f2f2f2;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
  `,

  ErrorDiv:styled.div`
    // height:10px;
    padding:0;
    font-size:small;
    color:red;  
  `,

  SignupDiv: styled.div`
    height: 50px;
    width: 100%;
    margin-top: 6%;
    @media screen and (max-width: 900px) {
      margin-top: 10%;
    }
    @media screen and (max-width: 700px) {
      margin-top: 12%;
      height: 45px;
    }
    @media screen and (max-width: 500px) {
      margin-top: 4%;
      height: 40px;
    }
    @media screen and (max-width: 400px) {
      margin-top: 4%;
      height: 35px;
    }
  `,

  ConsentDiv: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 6%;
    height: 9%;
    margin-bottom: 0%;
    @media screen and (max-width: 400px) {
      margin-top: 4%;
      height: 13%;
    }
  `,
  Check: styled.input`
    margin-bottom: 3%;
    @media screen and (max-width: 960px) {
      margin-bottom: 12%;
    }
    @media screen and (max-width: 860px) {
      margin-bottom: 14%;
    }
    @media screen and (max-width: 750px) {
      margin-bottom: 27%;
    }
    @media screen and (max-width: 670px) {
      margin-bottom: 13%;
    }
    @media screen and (max-width: 580px) {
      margin-bottom: 2%;
    }
    @media screen and (max-width: 295px) {
      margin-bottom: 10%;
    }
  `,

  Para: styled.div`
    word-wrap: break;
    font-size: medium;
    margin-left: 2%;
    height: 100%;
    margin-top: 2%;
    @media screen and (max-width: 700px) {
      font-size: medium;
    }
    @media screen and (max-width: 500px) {
      font-size: small;
      margin-top: 2%;
    }
    @media screen and (max-width: 700px) {
      font-size: small;
    }
  `,

  BottomPara: styled.p`
    color: grey;
    @media screen and (max-width: 850px) {
      font-size: small;
    }
  `,

  OrDiv: styled.div`
    height: 5%;
    width: 100%;
    text-align: center;
    color: #91919;
    margin-top: 3%;
    @media screen and (max-width: 400px) {
      margin-top: 4%;
    }
    @media screen and (max-width: 395px) {
      margin-top: 0%;
    }
  `,
  GoogleDiv: styled.button`
    height: 40px;
    width: 100%;
    margin-top: 3%;
    text-align: center;
    display: flex;
    flex-direction: row;
    background-color: white;
    @media screen and (max-width: 700px) {
      padding-top: 3%;
    }
    @media screen and (max-width: 600px) {
      padding-top: 1.5%;
    }
    @media screen and (max-width: 400px) {
      margin-left: 0;
    }
    @media screen and (max-width: 350px) {
      padding-top: 1.5%;
    }
    border: 1px solid #f2f2f2;
    border-radius: 10px;
  `,

  IconDiv: styled.div`
    margin-left: 25%;
    margin-top: 1%;
    height: 30px;
    @media screen and (max-width: 1250px) {
      margin-left: 20%;
    }
    @media screen and (max-width: 1070px) {
      margin-left: 18%;
    }
    @media screen and (max-width: 960px) {
      margin-left: 15%;
    }
    @media screen and (max-width: 900px) {
      margin-left: 8%;
      height: 28px;
    }
    @media screen and (max-width: 850px) {
      margin-left: 14%;
    }
    @media screen and (max-width: 700px) {
      height: 25px;
    }
    @media screen and (max-width: 600px) {
      height: 23px;
      margin-left: 24%;
    }
    @media screen and (max-width: 500px) {
      margin-left: 17%;
    }
    @media screen and (max-width: 400px) {
      height: 20px;
      margin-left: 22%;
    }
  `,
  LoginDiv: styled.div`
  height: 15%;
  width: 100%;
  text-align: center;
  margin-top: 3%;
  }
`,
  Button: styled.button`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px;
    color: white;
    background-color: #5352ed;
    font-size: large;
  `,

  OrP: styled.p`
    color: #91919f;
    @media screen and (max-width: 400px) {
      font-size: small;
    }
    @media screen and (max-width: 395px) {
      margin-top: 4%;
    }
    @media screen and (max-width: 850px) {
      font-size: 15px;
    }
  `,

  HeadingDiv: styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    @media screen and (width>600px) {
      visibility: hidden;
    }
  `,

  HeadDiv: styled.div`
    width: 70%;
    font-family: "Inter", sans-serif;
    height: 100%;
    text-align: center;
    margin-top: 1%;
  `,

  BackDiv: styled.div`
    width: 10%;
    height: 100%;
  `,

  TermsA: styled.a`
    color: #5352ed;
    text-decoration: none;
  `,
  CustomB: styled.b`
    font-weight: 550;
    @media screen and (max-width: 850px) {
      font-size: small;
    }
  `,
  ShowHideDiv: styled.div`
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
  `,
};
