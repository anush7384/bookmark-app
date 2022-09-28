import { useState, useEffect } from "react";
import styled from "styled-components";

import Folders from "../Folders/index";
import { ClipLoader } from "react-spinners";
import { connect, useDispatch } from "react-redux";
import Input from "../shared/Input/index";
import { styles } from "./styles";
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useGetState } from "../../hooks";
import { requestAllFolders, createFolderRequest, getBookmarksRequest } from "../../store/actions";

import Modal from "@mui/material/Modal";
import { Dispatch } from "redux";

const bookIcon: string =
  require("../../utils/Images/bookmark_icon.svg").default;
const searchIcon: string =
  require("../../utils/Images/search_icon.svg").default;

interface LeftDashboardPropsType {
  requestFolders: () => void;
  createFolder: (name: string) => void;
  getUser:()=>void;
  getBookmarks:(id:string)=>void;
}

const FavIcon = styled(MdFavorite)`
  color: #5352ed;
  width: 25px;
  height: 25px;
`;
const Logout = styled(FaSignOutAlt)`
  color: #5352ed;
  width: 25px;
  height: 25px;
`;
const CancelIcon = styled(MdOutlineCancel)`
  margin-top: 8.5%;
  margin-left: 30%;
  :hover {
    cursor: pointer;
  }
`;

const LoaderDiv = styled.div`
  height: 40%;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30%;
  margin-left: 20%;
`;

const LeftDashboard = (props: LeftDashboardPropsType) => {
  const [folderModal, setFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const addFolderHandler = () => {
    setFolderModal(true);
  };

  useEffect(() => {
    props.requestFolders();
    props.getUser();
  }, []);

  const { folders, folderSpinner } = useGetState();

  const createFolderHandler = () => {
    props.createFolder(newFolderName);
    setNewFolderName("");
    setFolderModal(false);
  };

  const getBookmarkHandler=(id:string)=>{
      props.getBookmarks(id);
  }

  return (
    <styles.MainDiv>
      <styles.HeadDiv>
        <styles.BookIcon>
          <img src={bookIcon} alt="bookmark" />
        </styles.BookIcon>
        <styles.Heading>
          <b>Bookmark</b>
        </styles.Heading>
      </styles.HeadDiv>
      <styles.SearchDiv>
        <styles.SearchIconDiv>
          <img src={searchIcon} alt="search_icon" />
        </styles.SearchIconDiv>
        <Input
          type="text"
          placeholder="Search..."
          style={{ width: "85%" }}
          use="dashboard"
        />
      </styles.SearchDiv>
      <styles.FolderDiv>
        <styles.FoldersDiv>
          {folderSpinner === true ? (
            <LoaderDiv>
              <ClipLoader />
            </LoaderDiv>
          ) : (
            <Folders foldersArray={folders} getBookmark={getBookmarkHandler} />
          )}
        </styles.FoldersDiv>
        <styles.AddFolderDiv>
          <styles.AddfolderButton onClick={addFolderHandler}>
            + Add Folder
          </styles.AddfolderButton>
        </styles.AddFolderDiv>
      </styles.FolderDiv>
      <styles.BottomDiv>
        <styles.FavLogdiv style={{ background: "#E4E3FF" }}>
          <styles.BottomIconDiv>
            <FavIcon />
          </styles.BottomIconDiv>
          <styles.BottomNameDiv>Favourites</styles.BottomNameDiv>
        </styles.FavLogdiv>
        <styles.FavLogdiv>
          <styles.BottomIconDiv>
            <Logout />
          </styles.BottomIconDiv>
          <styles.BottomNameDiv onClick={() => localStorage.clear()}>
            Logout
          </styles.BottomNameDiv>
        </styles.FavLogdiv>
      </styles.BottomDiv>
      <Modal open={folderModal}>
        <styles.NewFolderBox>
          <styles.HeadingDiv>
            <styles.AddFolderHeadingDiv>
              Create Folder
            </styles.AddFolderHeadingDiv>
            <CancelIcon size="25px" onClick={() => setFolderModal(false)} />
          </styles.HeadingDiv>
          <styles.FolderNameDiv>Folder Name</styles.FolderNameDiv>
          <styles.NewFolderInputDiv>
            <styles.AddFolderInput
              type="text"
              placeholder="Enter Folder Name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
          </styles.NewFolderInputDiv>
          <styles.CreateFolderButton onClick={createFolderHandler}>
            Create
          </styles.CreateFolderButton>
        </styles.NewFolderBox>
      </Modal>
    </styles.MainDiv>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestFolders: () => dispatch(requestAllFolders()),
    getUser: () => dispatch({ type: "GET_USER_REQUEST" }),
    createFolder: (name: string) => dispatch(createFolderRequest(name)),
    getBookmarks:(id:string) => dispatch(getBookmarksRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(LeftDashboard);
