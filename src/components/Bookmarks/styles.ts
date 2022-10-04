import BarLoader from "react-spinners/BarLoader";
import styled from "styled-components";

const styles = {
  CardDiv: styled.div`
    width: 23%;
    height: 94%;
    margin-top: 1%;
    margin-right: 0.5%;
    margin-left: 1%;

    @media screen and (max-width: 1100px) {
      width: 30%;
      margin-left: 2%;
    }
    @media screen and (max-width: 850px) {
      width: 40%;
      margin-left: 5%;
    }
    @media screen and (max-width: 700px) {
      width: 45%;
      margin-left: 3%;
    }
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
      0px 8px 24px -4px rgba(24, 39, 75, 0.08);
    border: 0.5px solid #e2e4e7;
    font-family: "Inter", sans-serif;
  `,
  CardVDiv: styled.div`
    width: 100%;
    height: 28%;
    margin-top: 1.5%;
    border: 1px solid red;
    display: flex;
    border-radius: 15px;
  `,
  ImageVDiv: styled.div`
    height: 80%;
    margin-top: 8px;
    width: 9%;
    border: 1px solid red;
    margin-left: 7%;
    :hover {
      cursor: pointer;
    }
  `,
  ImageDiv: styled.div`
    width: 90%;
    height: 50%;
    margin-top: 4%;
    margin-left: 5%;
    :hover {
      cursor: pointer;
    }
  `,
  MidVDiv: styled.div`
    height: 80%;
    width: 35%;
    border: 1px solid blue;
    margin-left: 1.5%;
    margin-top: 8px;
    font-family: "Inter", sans-serif;
  `,
  NameVDiv: styled.div`
    height: 30%;
    margin-top: 1%;
    width: 100%;
    border: 1px solid red;
    font-size: 18px;
    font-weight: 600;
    font-family:"Inter",sans-serif;
  `,
  PathVDiv: styled.div`
    width: 14%;
    border: 1px solid red;
    height: 80%;
    margin-top: 8px;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  PathCenterDiv: styled.div`
    height: 40%;
    border: 1px solid red;
    display: flex;
  `,
  PathIconVDiv: styled.div`
    width: 15%;
    height: 65%;
    margin-top: 5px;
    border: 1px solid black;
  `,
  OtherVDiv: styled.div`
    width: 23%;
    height: 80%;
    margin-top: 8px;
    border: 1px solid black;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  OtherCenterDiv: styled.div`
    height: 40%;
    border: 1px solid red;
    display:flex;
    :hover{
      cursor:pointer;
    }
  `,
  FavVDiv: styled.div`
    width: 23%;
    border: 1px solid red;
    height: 70%;
    margin-top:1.5%;
  `,
  EditVDiv: styled.div`
    width: 23%;
    margin-left: 2px;
    border: 1px solid red;
    display:flex;
    justify-content:center;
    margin-top:1.5%;
    height: 80%;
  `,
  MoveVDiv: styled.div`
    width: 23%;
    margin-left: 2px;
    height: 80%;
    display:flex;
    justify-content:center;
    margin-top:1.5%;
    border: 1px solid red;
  `,
  DeleteVDiv: styled.div`
    width: 23%;
    height: 80%;
    margin-top:1.5%;
    display:flex;
    justify-content:center;
    margin-left: 2px;
    border: 1px solid red;
  `,
  PathNameVDiv: styled.div`
    width: 75%;
    height: 70%;
    margin-top: 4px;
    border: 1px solid pink;
  `,
  DescVDiv: styled.div`
    height: 50%;
    width: 100%;
    margin-top: 1.5%;
    font-size: 13px;
    border: 1px solid black;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    color: #9d9b9f;
  `,
  MidDiv: styled.div`
    display: flex;
    flex-direction: row;
    height: 9%;
    width: 90%;
    margin-top: 3%;
    margin-left: 5%;
  `,
  BookMarkNameDiv: styled.div`
    width: 80%;
    margin-left: 0.5%;
    font-size: 18px;
    @media screen and (max-width: 950px) {
      font-size: 18px;
    }

    @media screen and (max-width: 750px) {
      font-size: 16px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
  `,
  FavDiv: styled.div`
    width: 8%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  `,
  OptionDiv: styled.div`
    width: 2%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
    align-item: center;
    :hover {
      cursor: pointer;
    }
  `,
  DescDiv: styled.div`
    height: 22%;
    width: 89%;
    margin-top: 2.5%;
    font-size: 14px;
    margin-left: 5.5%;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    color: #9d9b9f;
    @media screen and (max-width: 950px) {
      font-size: 14px;
    }
  `,
  PathDiv: styled.div`
    height: 7%;
    width: 90%;
    margin-left: 8%;
    margin-top: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  PathFolderIconDiv: styled.div`
    width: 7.5%;
    margin-left: 10%;
    display: flex;
    font-family: "Inter", sans-serif;
    flex-direction: column;
    justify-content: center;
  `,
  PathFolderNameDiv: styled.div`
    width: 40%;
    margin-left: 2%;
    color: #5352ed;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
  `,
  ImageV: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px;
  `,

  MainDiv: styled.div`
  height: 48%;
  width: 100%;
  display: flex;
  flex:direction: row;
  flex-wrap: wrap;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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

  FolderNameDiv: styled.div`
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
  NoBookmarkDiv: styled.div`
    width: 25%;
    height: 45%;
    margin-left: 37%;
    margin-top: 8%;
    display: flex;
    flex-direction: column;
  `,
  NoBookmarkIcon: styled.div`
    width: 20%;
    height: 35%;
    margin-left: 43%;
  `,
  NoBookmarkFoundDiv: styled.div`
    width: 100%;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #474749;
  `,
  NoBookmarkLastDiv: styled.div`
    width: 100%;
    height: 30%;
    text-align: center;
    margin-top: 2%;
    font-size: 16px;
    color: #77757f;
  `,

  SpinnerDiv: styled.div`
    width: 100%;
    align-item: center;
  `,
  Spinner: styled(BarLoader)`
    margin-left: 47%;
    margin-top: 17%;
  `,
  ProcessingDiv: styled.div`
    margin-top: 25%;
    margin-left: 50%;
    width: 20%;
  `,
  MainVDiv: styled.div`
  height: 48%;
  width: 100%;
  display: flex;
  border:1px solid red;
  flex:direction: column;
  flex-wrap: wrap;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  `,
};

export default styles;
