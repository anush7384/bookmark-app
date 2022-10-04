import { useEffect, useState } from "react";

import Modal from "@mui/material/Modal";
import styles from "./styles";
import { useGetState } from "../../hooks";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toggleFavoriteRequest } from "../../store/actions";
import {
  deleteBookmarkRequest,
  moveBookmarkRequest,
} from "../../store/actions";
import { BiEditAlt } from "react-icons/bi";
import { VscFiles } from "react-icons/vsc";
import {
  BsFillJournalBookmarkFill,
  BsHeart,
  BsFillHeartFill,
} from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { SyncLoader } from "react-spinners";

const folderIcon: string =
  require("../../utils/Images/Folder/folder_icon.svg").default;
const bookmarkImage: string =
  require("../../utils/Images/bookmark_image.svg").default;
const optionIcon: string =
  require("../../utils/Images/Folder/options.svg").default;

interface BookmarksPropsType {
  deleteBookmark: (id: string) => void;
  moveBookmark: (obj: MoveObjType) => void;
  toggleFavorite: (id: string) => void;
}
const Bookmarks = (props: BookmarksPropsType) => {
  let {
    bookmarks,
    bookmarkSpinner,
    folders,
    message,
    folderid,
    processing,
    vertical,
  } = useGetState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openFolder, setOpenFolder] = useState(false);
  const [folderId, setFolderId] = useState("");
  const [bookmarkId, setBookmarkId] = useState("");
  let folder = folders.filter((folder: any) => folder.id === folderid);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const moveBookmarkHandler = () => {
    let obj = {
      folderId: folderId,
      bookmarkId: bookmarkId,
    };
    props.moveBookmark(obj);
  };
  useEffect(() => {
    if (folderId !== "") moveBookmarkHandler();
  }, [folderId]);
  return (
    <>
      {vertical === false ? (
        <styles.MainDiv>
          {bookmarkSpinner === true ? (
            <styles.SpinnerDiv>
              <styles.Spinner color="#4777f5" />
            </styles.SpinnerDiv>
          ) : bookmarks.length === 0 ? (
            <styles.NoBookmarkDiv>
              <styles.NoBookmarkIcon>
                <BsFillJournalBookmarkFill size="40px" color="#5352ed" />
              </styles.NoBookmarkIcon>
              <styles.NoBookmarkFoundDiv>{message}</styles.NoBookmarkFoundDiv>
              <styles.NoBookmarkLastDiv>
                Keep content organised with folders
              </styles.NoBookmarkLastDiv>
            </styles.NoBookmarkDiv>
          ) : (
            bookmarks.map((bookmark: any) => (
              <styles.CardDiv key={bookmark.id}>
                <styles.ImageDiv
                  onClick={() => window.open(`${bookmark.url}`, "_blank")}
                >
                  <styles.Image
                    src={
                      bookmark.imageUrl === ""
                        ? bookmarkImage
                        : bookmark.imageUrl
                    }
                    alt=""
                  />
                </styles.ImageDiv>
                <Menu
                  keepMounted
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                >
                  <div style={{ display: "none" }}>a</div>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      props.deleteBookmark(bookmarkId);
                    }}
                    sx={{ color: "#5352ED" }}
                  >
                    Delete
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setOpenFolder(true);
                    }}
                    sx={{ color: "#5352ED" }}
                  >
                    Move
                  </MenuItem>
                </Menu>
                <styles.MidDiv>
                  <styles.BookMarkNameDiv>
                    {bookmark.name}
                  </styles.BookMarkNameDiv>
                  <styles.FavDiv>
                    {bookmark.isFavorite ? (
                      <BsFillHeartFill
                        size="100%"
                        color="#e01606"
                        onClick={() => props.toggleFavorite(bookmark.id)}
                      />
                    ) : (
                      <BsHeart
                        size="100%"
                        onClick={() => props.toggleFavorite(bookmark.id)}
                      />
                    )}
                  </styles.FavDiv>
                  <styles.OptionDiv>
                    <img
                      src={optionIcon}
                      alt=""
                      style={{ width: "60%", height: "60%" }}
                      onClick={(e: any) => {
                        setBookmarkId(bookmark.id);
                        setAnchorEl(e.currentTarget);
                      }}
                    />
                  </styles.OptionDiv>
                </styles.MidDiv>
                <styles.DescDiv>
                  {bookmark.description === ""
                    ? "This is a Generalised description for Every bookmark which doesnt have their own description.as it didnt have any default description."
                    : bookmark.description}
                </styles.DescDiv>
                <styles.PathDiv>
                  <styles.PathFolderIconDiv>
                    <img src={folderIcon} alt="" />
                  </styles.PathFolderIconDiv>
                  <styles.PathFolderNameDiv>
                    {folder[0].name}
                  </styles.PathFolderNameDiv>
                </styles.PathDiv>
                <Modal open={openFolder} sx={{ opacity: "70%" }}>
                  <styles.BoxDiv>
                    <styles.FolderItemsDiv>
                      {folders.map((folder: any) => {
                        return (
                          <styles.FolderDiv
                            onClick={() => {
                              setFolderId(folder.id);
                              setOpenFolder(false);
                            }}
                            key={folder.id}
                          >
                            <styles.ContentDiv>
                              <styles.IconDiv>
                                <img src={folderIcon} alt="folder_icon" />
                              </styles.IconDiv>
                              <styles.FolderNameDiv>
                                {folder.name}
                              </styles.FolderNameDiv>
                            </styles.ContentDiv>
                          </styles.FolderDiv>
                        );
                      })}
                    </styles.FolderItemsDiv>
                  </styles.BoxDiv>
                </Modal>
                <Modal open={processing} sx={{ opacity: "30%" }}>
                  <styles.ProcessingDiv>
                    <SyncLoader color="white" />
                  </styles.ProcessingDiv>
                </Modal>
              </styles.CardDiv>
            ))
          )}
        </styles.MainDiv>
      ) : (
        <styles.MainVDiv>
          {bookmarkSpinner === true ? (
            <styles.SpinnerDiv>
              <styles.Spinner color="#4777f5" />
            </styles.SpinnerDiv>
          ) : bookmarks.length === 0 ? (
            <styles.NoBookmarkDiv>
              <styles.NoBookmarkIcon>
                <BsFillJournalBookmarkFill size="40px" color="#5352ed" />
              </styles.NoBookmarkIcon>
              <styles.NoBookmarkFoundDiv>{message}</styles.NoBookmarkFoundDiv>
              <styles.NoBookmarkLastDiv>
                Keep content organised with folders
              </styles.NoBookmarkLastDiv>
            </styles.NoBookmarkDiv>
          ) : (
            bookmarks.map((bookmark: any) => (
              <styles.CardVDiv key={bookmark.id}>
                <styles.ImageVDiv>
                  <styles.ImageV
                    src={
                      bookmark.imageUrl === ""
                        ? bookmarkImage
                        : bookmark.imageUrl
                    }
                    alt=""
                  />
                </styles.ImageVDiv>
                <styles.MidVDiv>
                  <styles.NameVDiv>{bookmark.name}</styles.NameVDiv>
                  <styles.DescVDiv>
                    {bookmark.description === ""
                      ? "This is a Generalised description for Every bookmark which doesnt have their own description.as it didnt have any default description."
                      : bookmark.description}
                  </styles.DescVDiv>
                </styles.MidVDiv>
                <styles.PathVDiv>
                  <styles.PathCenterDiv>
                    <styles.PathIconVDiv>
                      <img src={folderIcon} alt="" style={{ width: "75%" }} />
                    </styles.PathIconVDiv>
                    <styles.PathNameVDiv>{folder[0].name}</styles.PathNameVDiv>
                  </styles.PathCenterDiv>
                </styles.PathVDiv>
                <styles.OtherVDiv>
                  <styles.OtherCenterDiv>
                    <styles.FavVDiv>
                      {bookmark.isFavorite ? (
                        <BsFillHeartFill
                          size="100%"
                          color="#e01606"
                          onClick={() => props.toggleFavorite(bookmark.id)}
                        />
                      ) : (
                        <BsHeart
                          size="100%"
                          color="#9D9B9F"
                          onClick={() => props.toggleFavorite(bookmark.id)}
                        />
                      )}
                    </styles.FavVDiv>
                    <styles.MoveVDiv>
                      <VscFiles
                        size="20px"
                        color="#9D9B9F"
                        onClick={() => {
                          setOpenFolder(true);
                        }}
                      />
                    </styles.MoveVDiv>
                    <styles.EditVDiv>
                      <BiEditAlt size="20px" color="#9D9B9F" />
                    </styles.EditVDiv>
                    <styles.DeleteVDiv>
                      <AiOutlineDelete size="20px" color="#9D9B9F" />
                    </styles.DeleteVDiv>
                  </styles.OtherCenterDiv>
                </styles.OtherVDiv>
                <Modal open={openFolder} sx={{ opacity: "70%" }}>
                  <styles.BoxDiv>
                    <styles.FolderItemsDiv>
                      {folders.map((folder: any) => {
                        return (
                          <styles.FolderDiv
                            onClick={() => {
                              setFolderId(folder.id);
                              setOpenFolder(false);
                            }}
                            key={folder.id}
                          >
                            <styles.ContentDiv>
                              <styles.IconDiv>
                                <img src={folderIcon} alt="folder_icon" />
                              </styles.IconDiv>
                              <styles.FolderNameDiv>
                                {folder.name}
                              </styles.FolderNameDiv>
                            </styles.ContentDiv>
                          </styles.FolderDiv>
                        );
                      })}
                    </styles.FolderItemsDiv>
                  </styles.BoxDiv>
                </Modal>
                <Modal open={processing} sx={{ opacity: "30%" }}>
                  <styles.ProcessingDiv>
                    <SyncLoader color="white" />
                  </styles.ProcessingDiv>
                </Modal>
              </styles.CardVDiv>
            ))
          )}
        </styles.MainVDiv>
      )}
    </>
  );
};

interface MoveObjType {
  folderId: string;
  bookmarkId: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteBookmark: (id: string) => dispatch(deleteBookmarkRequest(id)),
    moveBookmark: (obj: MoveObjType) => dispatch(moveBookmarkRequest(obj)),
    toggleFavorite: (id: string) => dispatch(toggleFavoriteRequest(id)),
  };
};
export default connect(null, mapDispatchToProps)(Bookmarks);
