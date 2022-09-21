import { combineReducers } from "redux";

import {userAuth} from "./userAuth/index";
import { folderReducer } from "./folderReducer";

export default combineReducers({
  userAuth,
  folderReducer,
});