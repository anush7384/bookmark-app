import { Fragment, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import styles from "./styles";
import { useGetState } from "../../hooks";
import { createBookmarkRequest } from "../../store/actions";
import Modal from "@mui/material/Modal";
const folderIcon: string =
  require("../../utils/Images/Folder/folder_icon.svg").default;

const quickLinkImage: string =
  require("../../utils/Images/quick_link.svg").default;

interface QuickLinkProps {
  createBookmark: (obj: BookmarkType) => void;
}

const QuickLink = (props: QuickLinkProps) => {
  const { folders, folderName, processing, addFolderId, saving } = useGetState();

  const [link, setLink] = useState("");
  const [folder, setFolder] = useState("");
  const [folderId, setFolderId] = useState("");
  const [name, setName] = useState("");
  const [openFolder, setOpenFolders] = useState(false);
  const [menu,setMenu] = useState(false);
  const createBookmarkHandler = () => {
    if(menu===true){
    let obj = {
      url: link,
      name: name,
      folderId: folderId,
    };
    props.createBookmark(obj);
  }
  else{
    let obj={
      url:link,
      name:name,
      folderId:addFolderId,
    };
    props.createBookmark(obj);
  }
    setLink("");
    setFolder("");
    setName("");
    setFolderId("");
  };

  return (
    <Fragment>
      <styles.MainDiv>
        <styles.LeftDiv>
          <styles.HeadingDiv>Add Quick Link</styles.HeadingDiv>
          <styles.LabelDiv>URL</styles.LabelDiv>
          <styles.UrlInputDiv>
            <styles.URLInput
              type="text"
              placeholder="Add URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </styles.UrlInputDiv>
          <styles.LabelDiv>NAME</styles.LabelDiv>
          <styles.HorizontalDiv>
            <styles.BookmarkNameDiv>
              <styles.URLInput
                type="text"
                placeholder="Bookmark Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </styles.BookmarkNameDiv>
            <styles.FolderInputDiv onClick={() => {setOpenFolders(true);setMenu(true);}}>
              {folder === "" ? folderName : folder}
            </styles.FolderInputDiv>
            {saving ? (
              <styles.SaveButton onClick={createBookmarkHandler}>
                Saving
              </styles.SaveButton>
            ) : (
              <styles.SaveButton onClick={createBookmarkHandler}>
                Save
              </styles.SaveButton>
            )}
          </styles.HorizontalDiv>
        </styles.LeftDiv>
        <div style={{ width: "30%" }}>
          <styles.Image src={quickLinkImage} alt="image" />
        </div>
      </styles.MainDiv>
      <Modal open={openFolder}>
        <styles.BoxDiv>
          <styles.FolderItemsDiv>
            {folders.map((folder: any) => {
              return (
                <styles.FolderDiv
                  onClick={() => {
                    setFolder(folder.name);
                    setFolderId(folder.id);
                    setOpenFolders(false);
                  }}
                  key={folder.id}
                >
                  <styles.ContentDiv>
                    <styles.IconDiv>
                      <img src={folderIcon} alt="folder_icon" />
                    </styles.IconDiv>
                    <styles.NameDiv>{folder.name}</styles.NameDiv>
                  </styles.ContentDiv>
                </styles.FolderDiv>
              );
            })}
          </styles.FolderItemsDiv>
        </styles.BoxDiv>
      </Modal>
    </Fragment>
  );
};

interface BookmarkType {
  url: string;
  name: string;
  folderId: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createBookmark: (obj: BookmarkType) => dispatch(createBookmarkRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(QuickLink);
