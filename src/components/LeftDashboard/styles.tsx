import styled from "styled-components";
import Box from "@mui/material/Box";

export const styles = {
  MainDiv: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  HeadDiv: styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
  `,
  SearchDiv: styled.div`
    width: 90%;
    height: 5%;
    padding-right: 1%;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    display: flex;
    flex-direction: row;
    margin-left: 4%;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
  `,
  FolderDiv: styled.div`
    height: 47%;
    padding-top: 5%;
  `,
  FoldersDiv: styled.div`
    height: 78%;
    margin-top: 3%;
    overflow: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  BottomDiv: styled.div`
    height: 18%;
    display: flex;
    margin-top: 90px;
    flex-direction: column;
  `,
  FavLogdiv: styled.div`
    width: 90%;
    &:focus {
      background-color: #e4e3ff;
    }
    margin-left: 4%;
    border-radius: 10px;
    height: 30%;
    display: flex;
    margin-top: 10px;
    :hover {
      cursor: pointer;
    }
  `,
  BookIcon: styled.div`
    width: 30%;
    height: 50%;
    margin-left: 5%;
    margin-top: 5%;
  `,
  Heading: styled.div`
    width: 80%;
    margin-left: 7%;
    font-size: 22.5px;
    font-family: "Inter", sans-serif;
  `,
  SearchIconDiv: styled.div`
    width: 6%;
    @media screen and (max-width: 700px) {
      width: 8%;
    }
    margin-left: 3%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  BottomIconDiv: styled.div`
    width: 15%;
    margin-left: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  BottomNameDiv: styled.div`
    width: 65%;
    display: flex;
    margin-left:6%;
    @media screen and (max-width: 1100px) {
      margin-left: 2%;
    }
    @media screen and (max-width: 950px) {
      margin-left: 4%;
      margin-bottom: 1%;
      font-size: 18px;
    }
    @media screen and (max-width: 790px) {
      margin-left: 6%;
      font-size: 17px;
    }
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    color: #77757f;
    font-family: "Inter", sans-serif;
  `,
  AddFolderDiv: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: sticky;
    top: 0;
    margin-top: 2%;
  `,
  AddfolderButton: styled.button`
    width: 84%;
    height: 45px;
    font-size: 15px;
    :hover {
      cursor: pointer;
    }
    background-color: white;
    border: none;
    border: 2px solid #5352ed;
    border-radius: 10px;
    font-family: "Inter", sans-serif;
    color: #5352ed;
  `,
  NewFolderBox: styled(Box)`
    width: 350px;
    background-color: white;
    height: 250px;
    margin-left: 40%;
    margin-top: 15%;
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
  `,
  FolderNameDiv: styled.div`
    height: 8%;
    width: 40%;
    font-weight: 400;
    font-size: 18px;
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
  LoaderDiv: styled.div`
    height: 40%;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30%;
    margin-left: 20%;
  `,
  CancelSearchDiv: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  `,
  NotFoundDiv: styled.div`
    width: 60%;
    margin-left: 22%;
    font-family: "Inter", sans-serif;
    height: 25%;
    margin-top: 30%;
    color: grey;
    font-size: 22px;
  `,
};
