import styled from "styled-components";

import Folder from "../Folder/index";
import Input from "../shared/Input/index";
import { styles } from "./styles";
import {MdFavorite} from "react-icons/md";
import {FaSignOutAlt} from "react-icons/fa";

const bookIcon: string =
  require("../../utils/Images/bookmark_icon.svg").default;
const searchIcon: string = require("../../utils/Images/search_icon.svg").default;

const FavIcon = styled(MdFavorite)`
    color:#5352Ed;
    width:25px;
    height:25px;
` 
const Logout = styled(FaSignOutAlt)`
    color:#5352ED;
    width:25px;
    height:25px;
`

const LeftDashboard = () => {
  return (
    <styles.MainDiv>
      <styles.HeadDiv>
        <styles.BookIcon>
          <img src={bookIcon} alt="bookmark" />
        </styles.BookIcon>
        <styles.Heading>
          <b>Bookmark</b>
        </styles.Heading>
      </styles.HeadDiv>
      <styles.SearchDiv>
        <styles.SearchIconDiv>
          <img src={searchIcon} alt="search_icon" />
        </styles.SearchIconDiv>
        <Input
          type="text"
          placeholder="Search..."
          style={{ width: "85%" }}
          use="dashboard"
        />
      </styles.SearchDiv>
      <styles.FolderDiv>
        <Folder />
        <Folder />
      </styles.FolderDiv>
      <styles.BottomDiv>
        <styles.FavLogdiv style={{background:"#E4E3FF"}}>
          <styles.BottomIconDiv>
            <FavIcon />
          </styles.BottomIconDiv>
          <styles.BottomNameDiv>Favourites</styles.BottomNameDiv>
        </styles.FavLogdiv>
        <styles.FavLogdiv>
          <styles.BottomIconDiv>
            <Logout/>
          </styles.BottomIconDiv>
          <styles.BottomNameDiv>Logout</styles.BottomNameDiv>
        </styles.FavLogdiv>
      </styles.BottomDiv>
    </styles.MainDiv>
  );
};

export default LeftDashboard;
