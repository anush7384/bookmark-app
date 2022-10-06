import styled from "styled-components";

export const styles = {
  FullDiv: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  `,
  LeftDiv: styled.div`
    width: 18%;
    @media screen and (max-width: 700px) {
      width: 23%;
    }
    height: 100%;
    box-shadow: 0 0 45px lightgrey;
  `,
  RightDiv: styled.div`
    width: 81.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  RightFullDiv: styled.div`
    width: 94.5%;
    margin-left: 4%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  NavDiv: styled.div`
    height: 8%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  QuickDiv: styled.div`
    height: 36%;
  `,
  MidDiv: styled.div`
    height: 8%;
    margin-top: 2px;
    display: flex;
    flex-direction: row;
  `,
  MidInputDiv: styled.div`
    width: 85%;
    height: 98%;
    @media screen and (max-width: 900px) {
      margin-left: 2%;
    }
    @media screen and (max-width: 650px) {
      margin-left: 3%;
    }
  `,
  HeadDiv: styled.div`
    border: 1px solid black;
  `,
  MidSearchDiv: styled.div`
    width: 30%;
    height: 70%;
    margin-top: 12px;
    border: 1px solid #dcdcdc;
    background-color: #f4f4f4;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
  `,
  MidSearchIconDiv: styled.div`
    width: 5%;
    height: 60%;
    margin-top: 5px;
    margin-left: 1%;
  `,
  CancelIconDiv: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  `,
  AddLinkButton: styled.button`
    width: 18%;
    height: 45px;
    font-size: 15px;
    @media screen and (max-width: 650px) {
      font-size: 13px;
    }
    :hover {
      cursor: pointer;
    }
    margin-top: 10px;
    margin-left: 40%;
    background-color: white;
    border: none;
    border: 2px solid #5352ed;
    border-radius: 10px;
    font-family: "Inter", sans-serif;
    color: #5352ed;
  `,
  DisplayDiv: styled.div`
    width: 8%;
    height: 45px;
    margin-top: 10px;
    margin-left: 3.5%;
    display: flex;
    :hover {
      cursor: pointer;
    }
  `,
  VerticalDiv: styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    background-color: ${(props: DisplayProps) =>
      props.vertical === true ? "#5352ED" : "#E6E2EA"};
  `,
  HorizontalDiv: styled.div`
    width: 50%;
    display: flex;
    background-color: ${(props: DisplayProps) =>
      props.vertical === true ? "#E6E2EA" : "#5352ED"};
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
  `,
};

interface DisplayProps{
  vertical:true|false;
}
