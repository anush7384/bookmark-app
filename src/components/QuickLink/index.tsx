import { Fragment } from "react";
import styled from "styled-components";

import Input from "../shared/Input/index";

const quickLinkImage: string =
  require("../../utils/Images/quick_link.svg").default;

const MainDiv = styled.div`
  background-color: #5352ed;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`;
const LeftDiv = styled.div`
  width: 65%;
  margin-left:4%;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`;
const ImageDiv = styled.div`
  width: 20%;
`;
const HeadingDiv = styled.div`
  height: 15%;
  width: 50%;
  margin-top:2%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-size:22px;
  font-weight:700;
  color:white;
  margin-bottom:1%;
`;
const LabelDiv = styled.div`
  height: 8%;
  font-size:15px;
  color:white;
  margin-top:1%;
`;
const UrlInputDiv = styled.div`
    height:15%;
    width:80%;
    margin-top:1%;
`
const HorizontalDiv = styled.div`
    display:flex;
    flex-direction:row;
    width:73%;
    height:15%;
    margin-top:1%;
`
const FolderInputDiv = styled.div`
    width:65%;
    height:98%;
`
const SaveButton = styled.button`
    border-radius:10px;
    background-color:white;
    color:#5352ED;
    width:30%;
    margin-left:4%;
    font-weight:700;
    font-size:15px;
`

const QuickLink = () => {
  return (
    <Fragment>
      <MainDiv>
        <LeftDiv>
          <HeadingDiv>Add Quick Link</HeadingDiv>
          <LabelDiv>URL</LabelDiv>
          <UrlInputDiv>
            <Input type="text" />
          </UrlInputDiv>
          <LabelDiv>Folder</LabelDiv>
          <HorizontalDiv>
            <FolderInputDiv>
              <Input type="text" />
            </FolderInputDiv>
            <SaveButton>
              {/* <b> */}
                Save
                {/* </b> */}
            </SaveButton>
          </HorizontalDiv>
        </LeftDiv>
        <ImageDiv>
          <img src={quickLinkImage} alt="image" />
        </ImageDiv>
      </MainDiv>
    </Fragment>
  );
};

export default QuickLink;
