import { useState, useEffect } from "react";
import styled from "styled-components";

import Folders from "../Folders/index";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";
import Input from "../shared/Input/index";
import { styles } from "./styles";
import { MdFavorite } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useGetState } from "../../hooks";
import {
  requestAllFolders,
  createFolderRequest,
  getBookmarksRequest,
  showFavoritesRequest,
  searchFolder,
  cancelSearchFolder,
} from "../../store/actions";

import Modal from "@mui/material/Modal";
import { Dispatch } from "redux";

const bookIcon: string =
  require("../../utils/Images/bookmark_icon.svg").default;
const searchIcon: string =
  require("../../utils/Images/search_icon.svg").default;

interface LeftDashboardPropsType {
  requestFolders: () => void;
  createFolder: (name: string) => void;
  getUser: () => void;
  getBookmarks: (id: string,name:string) => void;
  showFavorites: () => void;
  searchFolder: (name: string) => void;
  cancelSearch: () => void;
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

const LeftDashboard = (props: LeftDashboardPropsType) => {
  const [folderModal, setFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [search, setSearch] = useState("");
  const [cancel, setCancel] = useState(false);
  const addFolderHandler = () => {
    setFolderModal(true);
  };

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setCancel(true);
      props.searchFolder(search);
    }
  };

  const cancelSearchHandler = () => {
    props.cancelSearch();
    setCancel(false);
    setSearch("");
  };
  useEffect(() => {
    props.requestFolders();
    props.getUser();
  },[] );

  const { folderSpinner, folders, folderLoading } = useGetState();

  const createFolderHandler = () => {
    props.createFolder(newFolderName);
    setNewFolderName("");
    setFolderModal(false);
  };

  const getBookmarkHandler = (id: string,name:string) => {
    props.getBookmarks(id,name);
  };
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchHandler}
        />
        {cancel ? (
          <styles.CancelSearchDiv onClick={cancelSearchHandler}>
            <MdOutlineCancel color="grey" />
          </styles.CancelSearchDiv>
        ) : (
          <></>
        )}
      </styles.SearchDiv>
      <styles.FolderDiv>
        <styles.FoldersDiv>
          {folderSpinner === true ? (
            <styles.LoaderDiv>
              <ClipLoader />
            </styles.LoaderDiv>
          ) : folders.length === 0 && cancel === true ? (
            <styles.NotFoundDiv>NOT FOUND</styles.NotFoundDiv>
          ) : (
            <Folders getBookmark={getBookmarkHandler} />
          )}
        </styles.FoldersDiv>
        <styles.AddFolderDiv>
          <styles.AddfolderButton onClick={addFolderHandler}>
            + Add Folder
          </styles.AddfolderButton>
        </styles.AddFolderDiv>
      </styles.FolderDiv>
      <styles.BottomDiv>
        <styles.FavLogdiv tabIndex={1} onClick={() => props.showFavorites()}>
          <styles.BottomIconDiv>
            <FavIcon />
          </styles.BottomIconDiv>
          <styles.BottomNameDiv>Favourites</styles.BottomNameDiv>
        </styles.FavLogdiv>
        <styles.FavLogdiv>
          <styles.BottomIconDiv>
            <Logout />
          </styles.BottomIconDiv>
          <styles.BottomNameDiv onClick={() => {localStorage.clear();}}>
            Logout
          </styles.BottomNameDiv>
        </styles.FavLogdiv>
      </styles.BottomDiv>
      <Modal open={folderLoading===true?true:folderModal}>
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
          {folderLoading?
          <styles.CreateFolderButton>
            Creating..
          </styles.CreateFolderButton>:
            (<styles.CreateFolderButton onClick={createFolderHandler}>
            Create
          </styles.CreateFolderButton>)}
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
    getBookmarks: (id: string,name:string) => dispatch(getBookmarksRequest(id,name)),
    showFavorites: () => dispatch(showFavoritesRequest()),
    searchFolder: (name: string) => dispatch(searchFolder(name)),
    cancelSearch: () => dispatch(cancelSearchFolder()),
  };
};

export default connect(null, mapDispatchToProps)(LeftDashboard);
