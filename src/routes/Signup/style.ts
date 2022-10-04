import styled from "styled-components";

const style = {
  LeftContainer: styled.div`
    height: 100%;
    width: 60%;
    background: linear-gradient(to right, #5352ed 65%, #ffffff 65%);
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
      display: none;
    }
  `,

  HeadDiv: styled.div`
    width: 20%;
    height: 5%;
    margin-top: 7%;
    margin-left: 13%;
    word-wrap: breakword;
    font-size: xx-large;
    color: #ffffff;
    font-family: "Inter", sans-serif;
  `,
  ImageDiv: styled.div`
    width: 80%;
    margin-left: 14%;
    height: 80%;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
  `,
};

export default style;
