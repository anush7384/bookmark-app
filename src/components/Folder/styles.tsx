import styled from "styled-components";
import Box from "@mui/material/Box";

export const styles = {
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
};
