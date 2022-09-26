import styled from "styled-components";
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
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    display: flex;
    flex-direction: row;
    margin-left: 4%;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
  `,
  FolderDiv: styled.div`
    height: 60%;
    padding-top: 5%;
  `,
  BottomDiv: styled.div`
    height: 18%;
    display: flex;
    flex-direction: column;
  `,
  FavLogdiv: styled.div`
    width: 90%;
    margin-left:4%;
    border-radius:10px;
    height: 30%;
    display: flex;
    margin-top: 10px;
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
    margin-left: 3%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  BottomIconDiv: styled.div`
    width: 15%;
    margin-left: 9%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  BottomNameDiv: styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    color: #77757f;
    font-family: "Inter", sans-serif;
  `,
};
