import { useState } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import {
  deleteFolderRequest,
  renameFolderRequest,
  createBookmarkRequest,
  getBookmarksRequest,
  deleteBookmarkRequest,
  moveBookmarkRequest,
} from "../../store/actions";

const FolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-top: 10px;
`;

const NameDiv = styled.div`
  width: 10%;
`;
const InputDiv = styled.div`
  width: 20%;
`;

type FolderCardProps = {
  key: string;
  id: string;
  name: string;
  deleteFolder:(id:string)=>void,
  renameFolder: (obj: ObjType) => void;
  createBookmark: (obj: BookmarkType) => void;
  deleteBookmark: (id: string) => void;
  getBookmarks: (id: string) => void;
  moveBookmark:(obj:MoveType) => void;
};

const FolderCard = (props: FolderCardProps) => {
  const [rename, setRename] = useState("");
  const [bookmark, setBookmark] = useState("");
  const submitHandler = () => {
    let obj = {
      folderId: props.id,
      name: rename,
    };
    setRename("");
    props.renameFolder(obj);
  };

  const deleteFolderHandler = () =>{
    props.deleteFolder(props.id);
  }

  const addHandler = () => {
    let obj = {
      url: bookmark,
      name: props.name,
    };
    setBookmark("");
    props.createBookmark(obj);
  };

  const deleteHandler = () => {
    let id = "e62b905a-e7ed-4363-b854-c3ba247a1baf"; // mention id for deleting
    props.deleteBookmark(id);
  };

  const moveHandler = () => {
    let obj = {
      folderId: props.id,
      bookmarkId: "5228751b-42a1-4e42-8ef1-a7d6770d5838", //mention id of bookmark to be moved
    };
    props.moveBookmark(obj);
  }
  return (
    <FolderDiv>
      <NameDiv>
        {props.name}
      </NameDiv>
      <InputDiv>
        <input
          type="text"
          onChange={(e) => setRename(e.target.value)}
          value={rename}
        />
      </InputDiv>
      <button onClick={deleteFolderHandler}>delete</button>
      <button onClick={submitHandler}>edit</button>
      <InputDiv>
        <input
          type="text"
          onChange={(e) => setBookmark(e.target.value)}
          value={bookmark}
          placeholder="Enter URL"
        />
      </InputDiv>
      <button onClick={addHandler}>add Bookmark</button>
      <button onClick={() => props.getBookmarks(props.id)}>bookmarks</button>
      <button onClick={deleteHandler}>delete</button>
      <button onClick={moveHandler}>move bookmark</button>
    </FolderDiv>
  );
};

interface ObjType {
  folderId: string;
  name: string;
}

interface BookmarkType {
  url: string;
  name: string;
}

interface MoveType{
  folderId:string,
  bookmarkId:string,
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteFolder:(id:string)=>dispatch(deleteFolderRequest(id)),
    renameFolder: (obj: ObjType) => dispatch(renameFolderRequest(obj)),
    createBookmark: (obj: BookmarkType) => dispatch(createBookmarkRequest(obj)),
    deleteBookmark: (id: string) => dispatch(deleteBookmarkRequest(id)),
    getBookmarks: (id: string) => dispatch(getBookmarksRequest(id)),
    moveBookmark:(obj:MoveType) => dispatch(moveBookmarkRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(FolderCard);
