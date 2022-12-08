import { Fragment, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Modal from "@mui/material/Modal";

import { styles } from "./styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { renameFolderRequest, deleteFolderRequest } from "../../store/actions";
import { FadeLoader } from "react-spinners";
import { useGetState } from "../../hooks";

const expand: string = require("../../utils/Images/Folder/expand.svg").default;
const folderIcon: string =
  require("../../utils/Images/Folder/folder_icon.svg").default;
const optionIcon: string =
  require("../../utils/Images/Folder/options.svg").default;

interface FolderPropsType {
  folder: any;
  selected: string;
  renameFolder: (obj: ObjType) => void;
  deleteFolder: (id: string) => void;
  showBookmark: (id: string, name: string) => any;
}

const Folder = (props: FolderPropsType) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rename, setRename] = useState(false);
  const [name, setName] = useState("");
  const [currentName, setCurrentName] = useState("");

  const { Loading } = useGetState();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const renameHandler = () => {
    let obj = {
      folderId: props.folder.id,
      name: name,
    };
    setRename(false);
    props.renameFolder(obj);
  };
  return (
    <Fragment>
      <styles.FolderDiv name={props.folder.name} selected={props.selected}>
        <styles.ExpandDiv>
          <styles.Ediv>
            <img src={expand} alt="expand" />
          </styles.Ediv>
        </styles.ExpandDiv>
        <styles.ContentDiv
          onClick={() => props.showBookmark(props.folder.id, props.folder.name)}
        >
          <styles.IconDiv>
            <img src={folderIcon} alt="folder_icon" />
          </styles.IconDiv>
          <styles.NameDiv>{props.folder.name}</styles.NameDiv>
        </styles.ContentDiv>
        <styles.OptionDiv onClick={(e: any) => setAnchorEl(e.currentTarget)}>
          <img src={optionIcon} style={{ width: "25%" }} alt="options_icon" />
        </styles.OptionDiv>
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
              setCurrentName(props.folder.name);
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
      </styles.FolderDiv>
      <Modal open={rename}>
        <styles.NewFolderBox>
          <styles.HeadingDiv>
            <styles.AddFolderHeadingDiv>
              Rename Folder
            </styles.AddFolderHeadingDiv>
            <styles.CancelIcon size="25px" onClick={() => setRename(false)} />
          </styles.HeadingDiv>
          <styles.FolderNameDiv>
            Folder Name :- {currentName}
          </styles.FolderNameDiv>
          <styles.NewFolderInputDiv>
            <styles.AddFolderInput
              type="text"
              placeholder="Enter New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </styles.NewFolderInputDiv>
          <styles.CreateFolderButton onClick={renameHandler}>
            Rename
          </styles.CreateFolderButton>
        </styles.NewFolderBox>
      </Modal>
      <Modal open={Loading} sx={{ opacity: "20%" }}>
        <styles.LoadingDiv>
          <FadeLoader color="white" />
        </styles.LoadingDiv>
      </Modal>
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
