import { combineReducers } from "redux";

import {userAuth} from "./userAuth/index";
import { folderReducer } from "./folderReducer";
import { bookmarkReducer } from "./bookmarkReducer";

export default combineReducers({
  userAuth,
  folderReducer,
  bookmarkReducer,
});