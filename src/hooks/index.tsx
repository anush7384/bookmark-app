import { useSelector } from "react-redux";

export const useGetState = ():any =>{
    const {folders,user,folderSpinner,bookmarks} = useSelector((state:any) => ({
        folders:state.folderReducer.folders,
        user: state.userAuth.user,
        folderSpinner:state.folderReducer.folderSpinner,
        bookmarks:state.bookmarkReducer.bookmarks,
        bookmarkSpinner:state.bookmarkReducer.bookmarkSpinner,
    }));
    return {folders,user,folderSpinner,bookmarks};
};
