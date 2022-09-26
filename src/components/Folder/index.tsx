import styled from "styled-components";

const expand: string = require("../../utils/Images/Folder/expand.svg").default;
// const collapse: string =
//   require("../../utils/Images/Folder/collapse.svg").default;
const folderIcon: string =
  require("../../utils/Images/Folder/folder_icon.svg").default;
const optionIcon: string = require("../../utils/Images/Folder/options.svg").default;

const FolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  padding-top: 2.5%;
  width: 90%;
  margin-left: 4.5%;
  margin-top: 1px;
  border-radius: 15px;
  // background: #e4e3ff;
`;
const ExpandDiv = styled.div`
  width: 12%;
  height:80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top:5%;
`;

const ContentDiv = styled.div`
  display: flex;
  height: 80%;
  flex-direction: row;
  width: 70%;
`;

const IconDiv = styled.div`
  width: 20%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

const NameDiv = styled.div`
  width: 75%;
  margin-left:3%;
  height:75%;
  color:#77757F;
  margin-top:4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family:"Inter",sans-serif;
`;

const OptionDiv = styled.div`
  width: 12%;
  height:50%;
  text-align:right;
  margin-top:4%;
`;

const Ediv = styled.div`
  width: 25%;
  height:25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Folder = () => {
  return (
    <FolderDiv>
      <ExpandDiv>
        <Ediv>
          <img src={expand} alt="expand"/>
        </Ediv>
      </ExpandDiv>
      <ContentDiv>
        <IconDiv><img src={folderIcon} alt="folder_icon"/></IconDiv>
        <NameDiv>Folder 1</NameDiv>
      </ContentDiv>
      <OptionDiv><img src={optionIcon} alt="options_icon"/></OptionDiv>
    </FolderDiv>
  );
};

export default Folder;
