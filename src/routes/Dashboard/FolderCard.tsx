import { useState } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { renameFolderRequest } from "../../store/actions";

const FolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20%;
  width: 800px;
`;

const NameDiv = styled.div`
  width: 20%;
`;
const InputDiv = styled.div`
  width: 30%;
`;
const ButtonDiv = styled.div`
  width: 7%;
`;

type FolderCardProps = {
  key: string;
  id: string;
  name: string;
  renameFolder: (obj: ObjType) => void;
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
  return (
    <FolderDiv>
      <NameDiv>
        <li>{props.name}</li>
      </NameDiv>
      <InputDiv>
        <input
          type="text"
          onChange={(e) => setRename(e.target.value)}
          value={rename}
        />
      </InputDiv>
      <ButtonDiv>
        <button onClick={submitHandler}>edit</button>
      </ButtonDiv>
      <InputDiv>
        <input
          type="text"
          onChange={(e) => setBookmark(e.target.value)}
          value={bookmark}
          placeholder="Enter URL"
        />
      </InputDiv>
      <ButtonDiv>
        <button>add Bookmark</button>
      </ButtonDiv>
    </FolderDiv>
  );
};

interface ObjType {
  folderId: string;
  name: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    renameFolder: (obj: ObjType) => dispatch(renameFolderRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(FolderCard);
