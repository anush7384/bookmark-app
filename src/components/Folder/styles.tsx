import styled from "styled-components";
import Box from "@mui/material/Box";
import { MdOutlineCancel } from "react-icons/md";

interface PropsType {
  name: string;
  selected: string;
}

export const styles = {
  NewFolderBox: styled(Box)`
    width: 350px;
    background-color: white;
    height: 250px;
    margin-left: 40%;
    margin-top: 15%;
    @media screen and (max-width: 1400px) {
      margin-left: 35%;
    }
    @media screen and (max-width: 1000px) {
      margin-top: 22%;
      margin-left: 33%;
      width: 300px;
    }
    @media screen and (max-width: 900px) {
      margin-top: 25%;
      margin-left: 35%;
      width: 290px;
      height: 220px;
    }

    @media screen and (max-width: 800px) {
      margin-top: 28%;
      margin-left: 33%;
      width: 290px;
      height: 220px;
    }

    @media screen and (max-width: 700px) {
      margin-top: 30%;
      margin-left: 30%;
      width: 290px;
      height: 220px;
    }

    @media screen and (max-width: 650px) {
      margin-top: 30%;
      margin-left: 27%;
      width: 290px;
      height: 220px;
    }
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
  `,
  HeadingDiv: styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
  `,
  AddFolderHeadingDiv: styled.div`
    width: 60%;
    font-size: 25px;
    font-weight: 600;
    margin-left: 5%;
    margin-top: 8%;
    @media screen and (max-width: 1050px) {
      font-size: 22px;
    }
    @media screen and (max-width: 950px) {
      font-size: 21px;
    }
    @media screen and (max-width: 850px) {
      font-size: 20px;
    }
  `,
  FolderNameDiv: styled.div`
    height: 8%;
    width: 70%;
    font-weight: 400;
    font-size: 18px;
    @media screen and (max-width: 1050px) {
      font-size: 17px;
      margin-top: 10%;
    }
    margin-left: 6%;
    margin-top: 12%;
    color: #808081;
  `,
  NewFolderInputDiv: styled.div`
    width: 80%;
    margin-left: 5%;
    border: 1px solid #5352ed;
    height: 14%;
    border-radius: 10px;
    margin-top: 3%;
  `,
  AddFolderInput: styled.input`
    height: 100%;
    width: 95%;
    padding-left: 5px;
    color: #5352ed;
    @media screen and (max-width: 960px) {
      font-size: 15px;
    }
    border-radius: 10px;
    border: none;
    font-size: medium;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: blue;
    }
  `,
  CreateFolderButton: styled.div`
    width: 30%;
    margin-left: 34%;
    height: 30px;
    padding-top: 3%;
    margin-top: 5%;
    color: white;
    background-color: #5352ed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 12px;
    :hover {
      cursor: pointer;
    }
  `,
  ExpandDiv: styled.div`
    width: 9%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5%;
  `,

  ContentDiv: styled.div`
    display: flex;
    height: 80%;
    flex-direction: row;
    width: 78%;
  `,

  IconDiv: styled.div`
    width: 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  NameDiv: styled.div`
    width: 75%;
    margin-left: 3%;
    height: 75%;
    color: #77757f;
    margin-top: 3%;
    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Inter", sans-serif;
  `,

  OptionDiv: styled.div`
    width: 5%;
    padding-right: 2%;
    height: 45%;
    text-align: right;
    margin-top: 3.5%;
    :hover {
      cursor: pointer;
    }
  `,

  Ediv: styled.div`
    width: 25%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  CancelIcon: styled(MdOutlineCancel)`
    margin-top: 8.5%;
    margin-left: 30%;
    :hover {
      cursor: pointer;
    }
  `,
  FolderDiv: styled.div`
    display: flex;
    flex-direction: row;
    height: 35px;
    padding-top: 2.5%;
    width: 90%;
    margin-left: 4.5%;
    margin-top: 1px;
    background-color: ${(props: PropsType) =>
      props.name === props.selected ? "#e4e3ff" : ""};
    border-radius: 15px;
    :hover {
      background-color: #e4e3ff;
      cursor: pointer;
    }
  `,
  LoadingDiv: styled.div`
    margin-top: 25%;
    margin-left: 48%;
    width: 10%;
  `,
};
