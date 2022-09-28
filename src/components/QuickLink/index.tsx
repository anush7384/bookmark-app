import { useGetState } from "../../hooks";
import { Fragment, useState } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { createBookmarkRequest } from "../../store/actions";
import Modal from "@mui/material/Modal";
const folderIcon: string =
  require("../../utils/Images/Folder/folder_icon.svg").default;

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
  margin-left: 4%;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`;
const ImageDiv = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  border: 1px solid red;
`;
const HeadingDiv = styled.div`
  height: 15%;
  width: 50%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 1%;
`;
const LabelDiv = styled.div`
  height: 8%;
  font-size: 15px;
  color: white;
  margin-top: 2%;
`;
const UrlInputDiv = styled.div`
  height: 15%;
  width: 90%;
  margin-top: 1%;
  border-radius: 10px;
  background-color: #6c6bf9;
`;
const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 15%;
  margin-top: 1%;
`;
const FolderInputDiv = styled.button`
  width: 20%;
  height: 98%;
  border-radius: 10px;
  padding-left: 5px;
  margin-left: 11%;
  border: none;
  font-size: 16px;
  background-color: #6c6bf9;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
const SaveButton = styled.button`
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
`;
const BoxDiv = styled.div`
  width: 350px;
  background-color: white;
  height: 250px;
  margin-left: 40%;
  margin-top: 15%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`;
const FolderItemsDiv = styled.div`
  overflow: auto;
  height: 98%;
  width: 99%;
`;
const FolderDiv = styled.div`
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
`;

const ContentDiv = styled.div`
  display: flex;
  height: 80%;
  flex-direction: row;
  width: 70%;
`;

const IconDiv = styled.div`
  width: 15%;
  height: 70%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameDiv = styled.div`
  width: 75%;
  margin-left: 3%;
  height: 75%;
  color: #77757f;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;

const URLInput = styled.input`
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
`;
const BookmarkNameDiv = styled.div`
  width: 40%;
  border-radius: 10px;
  background-color: #6c6bf9;
`;
const Image = styled.img`
  height: 100%;
  width: 25%;
  margin-left: 5%;
`;

interface QuickLinkProps {
  createBookmark: (obj: BookmarkType) => void;
}

const QuickLink = (props: QuickLinkProps) => {
  const [link, setLink] = useState("");
  const [folder, setFolder] = useState("");
  const [folderId, setFolderId] = useState("");
  const [name, setName] = useState("");
  const [openFolder, setOpenFolder] = useState(false);
  const createBookmarkHandler = () => {
    let obj = {
      url: link,
      name: name,
      folderId:folderId,
    };
    setLink("");
    setFolder("");
    setName("");
    setFolderId("");
    props.createBookmark(obj);
  };
  const { folders } = useGetState();

  return (
    <Fragment>
      <MainDiv>
        <LeftDiv>
          <HeadingDiv>Add Quick Link</HeadingDiv>
          <LabelDiv>URL</LabelDiv>
          <UrlInputDiv>
            <URLInput
              type="text"
              placeholder="Add URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </UrlInputDiv>
          <LabelDiv>NAME</LabelDiv>
          <HorizontalDiv>
            <BookmarkNameDiv>
              <URLInput
                type="text"
                placeholder="Bookmark Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </BookmarkNameDiv>
            <FolderInputDiv onClick={() => setOpenFolder(true)}>
              {/* <Input
                type="text"
                placeholder="Folder Name"
                use="dashboard"
                value={folder}
                onChange={(e) => setFolder(e.target.value)}
              /> */}
              {folder === "" ? "folder name" : folder}
            </FolderInputDiv>
            <SaveButton onClick={createBookmarkHandler}>Save</SaveButton>
          </HorizontalDiv>
        </LeftDiv>
        {/* <ImageDiv> */}
        <Image src={quickLinkImage} alt="image" />
        {/* </ImageDiv> */}
      </MainDiv>
      <Modal open={openFolder}>
        <BoxDiv>
          <FolderItemsDiv>
            {folders.map((folder: any) => {
              return (
                <FolderDiv
                  onClick={() => {
                    setFolder(folder.name);
                    setFolderId(folder.id);
                    setOpenFolder(false);
                  }}
                  key={folder.id}
                >
                  <ContentDiv>
                    <IconDiv>
                      <img src={folderIcon} alt="folder_icon" />
                    </IconDiv>
                    <NameDiv>{folder.name}</NameDiv>
                  </ContentDiv>
                </FolderDiv>
              );
            })}
          </FolderItemsDiv>
        </BoxDiv>
      </Modal>
    </Fragment>
  );
};

interface BookmarkType {
  url: string;
  name: string;
  folderId:string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createBookmark: (obj: BookmarkType) => dispatch(createBookmarkRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(QuickLink);
