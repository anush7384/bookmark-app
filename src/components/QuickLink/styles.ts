import styled from "styled-components";

const styles = {
  MainDiv: styled.div`
    background-color: #5352ed;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
  `,
  LeftDiv: styled.div`
    width: 65%;
    margin-left: 4%;
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
  `,
  HeadingDiv: styled.div`
    height: 15%;
    width: 50%;
    @media screen and (max-width: 900px) {
      margin-bottom: 2.5%;
    }
    @media screen and (max-width: 700px) {
      margin-bottom: 4%;
    }
    @media screen and (max-width: 680px) {
      margin-bottom: 6%;
      margin-top: 5%;
    }
    @media screen and (max-width: 650px) {
      width: 70%;
    }
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 22px;
    font-weight: 700;
    color: white;
    margin-bottom: 1%;
  `,
  LabelDiv: styled.div`
    height: 8%;
    font-size: 15px;
    color: white;
    margin-top: 2%;
  `,
  UrlInputDiv: styled.div`
    height: 15%;
    width: 90%;
    margin-top: 1%;
    border-radius: 10px;
    background-color: #6c6bf9;
  `,
  HorizontalDiv: styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 15%;
    margin-top: 1%;
  `,
  FolderInputDiv: styled.button`
    width: 20%;
    height: 98%;
    border-radius: 10px;
    // padding-left: 5px;
    padding-right:5px;
    align-text:center;
    margin-left: 10%;
    border: none;
    font-size: 16px;
    background-color: #6c6bf9;
    color: #d2d6d7;
    :hover {
      cursor: pointer;
    }
  `,
  SaveButton: styled.button`
    border-radius: 10px;
    background-color: white;
    color: #5352ed;
    width: 20%;
    margin-left: 9%;
    border: none;
    :hover {
      cursor: pointer;
    }
    font-weight: 700;
    font-size: 15px;
  `,
  BoxDiv: styled.div`
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
  FolderItemsDiv: styled.div`
    overflow: auto;
    height: 98%;
    width: 99%;
  `,
  FolderDiv: styled.div`
    display: flex;
    flex-direction: row;
    height: 35px;
    padding-top: 2.5%;
    width: 90%;
    margin-left: 4.5%;
    margin-top: 1px;
    border-radius: 15px;
    :hover {
      cursor: pointer;
    }
  `,

  ContentDiv: styled.div`
    display: flex;
    height: 80%;
    flex-direction: row;
    width: 70%;
  `,

  IconDiv: styled.div`
    width: 15%;
    height: 70%;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  NameDiv: styled.div`
    width: 75%;
    margin-left: 3%;
    height: 75%;
    color: #77757f;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Inter", sans-serif;
  `,

  URLInput: styled.input`
    height: 100%;
    width: 89%;
    padding-left: 5px;
    border-radius: 10px;
    border: none;
    font-size: medium;
    :focus {
      outline: none;
    }
    background: transparent;
    color: white;
    ::placeholder {
      color: white;
    }
  `,
  BookmarkNameDiv: styled.div`
    width: 40%;
    border-radius: 10px;
    background-color: #6c6bf9;
  `,
  Image: styled.img`
    height: 105%;
    width: 105%;
  `,
};

export default styles;
