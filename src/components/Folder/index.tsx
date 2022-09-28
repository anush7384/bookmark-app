import { Fragment, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Modal from "@mui/material/Modal";

import { MdOutlineCancel } from "react-icons/md";
import { styles } from "./styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { renameFolderRequest, deleteFolderRequest } from "../../store/actions";

const expand: string = require("../../utils/Images/Folder/expand.svg").default;
const folderIcon: string =
  require("../../utils/Images/Folder/folder_icon.svg").default;
const optionIcon: string =
  require("../../utils/Images/Folder/options.svg").default;

const FolderDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 35px;
  padding-top: 2.5%;
  width: 90%;
  margin-left: 4.5%;
  margin-top: 1px;
  border-radius: 15px;
  :hover{
    background-color:#e4e3ff;
    cursor:pointer;
  }
`;
const ExpandDiv = styled.div`
  width: 12%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5%;
`;

const ContentDiv = styled.div`
  display: flex;
  height: 80%;
  flex-direction: row;
  width: 70%;
`;

const IconDiv = styled.div`
  width: 20%;
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

const OptionDiv = styled.div`
  width: 12%;
  height: 50%;
  text-align: right;
  margin-top: 4%;
  :hover {
    cursor: pointer;
  }
`;

const Ediv = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CancelIcon = styled(MdOutlineCancel)`
  margin-top: 8.5%;
  margin-left: 30%;
  :hover {
    cursor: pointer;
  }
`;

interface FolderPropsType {
  folder: any;
  renameFolder: (obj: ObjType) => void;
  deleteFolder: (id: string) => void;
}

const Folder = (props: FolderPropsType) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rename, setRename] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => {
    setAnchorEl(null);
  };
  const renameHandler = () => {
    let obj = {
      folderId: props.folder.id,
      name: name,
    };
    props.renameFolder(obj);
    setRename(false);
  };

  return (
    <Fragment>
      <FolderDiv>
        <ExpandDiv>
          <Ediv>
            <img src={expand} alt="expand" />
          </Ediv>
        </ExpandDiv>
        <ContentDiv>
          <IconDiv>
            <img src={folderIcon} alt="folder_icon" />
          </IconDiv>
          <NameDiv>{props.folder.name}</NameDiv>
        </ContentDiv>
        <OptionDiv>
          <img
            src={optionIcon}
            alt="options_icon"
            onClick={(e: any) => setAnchorEl(e.currentTarget)}
          />
        </OptionDiv>
        <Menu
          keepMounted
          anchorEl={anchorEl}
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <div style={{ display: "none" }}>a</div>
          <MenuItem onClick={handleClose} sx={{ color: "#5352ED" }}>
            Add Subfolder
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setRename(true);
            }}
            sx={{ color: "#5352ED" }}
          >
            Rename
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              props.deleteFolder(props.folder.id);
            }}
            sx={{ color: "#5352ED" }}
          >
            Delete
          </MenuItem>
        </Menu>
      </FolderDiv>
      <Modal open={rename}>
        <styles.NewFolderBox>
          <styles.HeadingDiv>
            <styles.AddFolderHeadingDiv>
              Rename Folder
            </styles.AddFolderHeadingDiv>
            <CancelIcon size="25px" onClick={() => setRename(false)} />
          </styles.HeadingDiv>
          <styles.FolderNameDiv>Folder Name</styles.FolderNameDiv>
          <styles.NewFolderInputDiv>
            <styles.AddFolderInput
              type="text"
              placeholder="Enter Folder Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </styles.NewFolderInputDiv>
          <styles.CreateFolderButton onClick={renameHandler}>
            Rename
          </styles.CreateFolderButton>
        </styles.NewFolderBox>
      </Modal>
      {/* <Modal open={rename}>
        <styles.NewFolderBox>
          <styles.HeadingDiv>
            <styles.AddFolderHeadingDiv>
              Create Folder
            </styles.AddFolderHeadingDiv>
            <CancelIcon size="25px" onClick={() => setRename(false)} />
          </styles.HeadingDiv>
          <styles.FolderNameDiv>Folder Name</styles.FolderNameDiv>
          <styles.NewFolderInputDiv>
            <styles.AddFolderInput
              type="text"
              placeholder="Enter Folder Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </styles.NewFolderInputDiv>
          <styles.CreateFolderButton onClick={renameHandler}>
            Create
          </styles.CreateFolderButton>
        </styles.NewFolderBox>
      </Modal> */}
    </Fragment>
  );
};

interface ObjType {
  folderId: string;
  name: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteFolder: (id: string) => dispatch(deleteFolderRequest(id)),
    renameFolder: (obj: ObjType) => dispatch(renameFolderRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Folder);
// export default Folder;
