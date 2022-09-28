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
    height: 9%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  QuickDiv: styled.div`
    height: 38%;
  `,
  MidDiv: styled.div`
    height: 8%;
    margin-top: 2px;
    display:flex;
    flex-direction:row;
  `,
};
