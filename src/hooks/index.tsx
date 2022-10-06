import { useSelector } from "react-redux";

export const useGetState = (): any => {
  const {
    folders,
    user,
    folderSpinner,
    bookmarks,
    message,
    bookmarkSpinner,
    folderid,
    login,
    folderName,
    folderLoading,
    Loading,
    processing,
    addFolderId,
    vertical,
    saving,
  } = useSelector((state: any) => ({
    folders: state.folderReducer.folders,
    user: state.userAuth.user,
    folderSpinner: state.folderReducer.folderSpinner,
    bookmarks: state.bookmarkReducer.bookmarks,
    bookmarkSpinner: state.bookmarkReducer.bookmarkSpinner,
    message: state.bookmarkReducer.message,
    folderid: state.bookmarkReducer.folderId,
    login: state.userAuth.login,
    folderName: state.bookmarkReducer.folderName,
    folderLoading: state.folderReducer.folderLoading,
    Loading:state.folderReducer.Loading,
    processing:state.bookmarkReducer.processing,
    addFolderId:state.bookmarkReducer.addFolderId,
    vertical:state.bookmarkReducer.vertical,
    saving:state.bookmarkReducer.saving,
  }));
  return {
    folders,
    user,
    folderSpinner,
    bookmarks,
    message,
    bookmarkSpinner,
    folderid,
    login,
    folderName,
    folderLoading,
    Loading,
    processing,
    addFolderId,
    vertical,
    saving,
  };
};
