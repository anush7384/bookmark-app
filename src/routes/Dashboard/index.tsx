import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import Input from "../../components/shared/Input/index";
import { styles } from "./styles";
import Nav from "../../components/Nav/index";
import QuickLink from "../../components/QuickLink/index";
import {
  cancelSearchBookmark,
  createFolderRequest,
  requestAllFolders,
  searchBookmark,
  toggleView,
} from "../../store/actions";
import LeftDashboard from "../../components/LeftDashboard/index";
import Bookmarks from "../../components/Bookmarks";
import { MdOutlineCancel } from "react-icons/md";

const searchIcon: string =
  require("../../utils/Images/search_icon.svg").default;

const SearchIcon = styled.img`
  height: 13px;
  margin-top: 9px;
`;
interface DashboardProps {
  createFolder: (name: string) => void;
  requestFolders: () => void;
  searchBookmark: (name: string) => void;
  cancelSearch: () => void;
  toggleView: () => void;
}

const Dashboard = (props: DashboardProps) => {
  const [search, setSearch] = useState("");
  const [cancel, setCancel] = useState(false);

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setCancel(true);
      props.searchBookmark(search);
    }
  };

  const cancelSearchHandler = (): void => {
    setCancel(false);
    setSearch("");
    props.cancelSearch();
  };

  const viewHandler = (): void => {
    props.toggleView();
  };

  return (
    <styles.FullDiv>
      <styles.LeftDiv>
        <LeftDashboard />
      </styles.LeftDiv>
      <styles.RightDiv>
        <styles.RightFullDiv>
          <styles.NavDiv>
            <Nav />
          </styles.NavDiv>
          <styles.QuickDiv>
            <QuickLink />
          </styles.QuickDiv>
          <styles.MidDiv>
            <styles.MidSearchDiv>
              <styles.MidSearchIconDiv>
                <SearchIcon src={searchIcon} alt="icon" />
              </styles.MidSearchIconDiv>
              <styles.MidInputDiv>
                <Input
                  type="text"
                  where="search"
                  placeholder="search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={searchHandler}
                />
              </styles.MidInputDiv>
              {cancel ? (
                <styles.CancelIconDiv>
                  <MdOutlineCancel color="grey" onClick={cancelSearchHandler} />
                </styles.CancelIconDiv>
              ) : (
                <></>
              )}
            </styles.MidSearchDiv>
            <styles.AddLinkButton>+ ADD LINK</styles.AddLinkButton>
            <styles.DisplayDiv>
              <styles.VerticalDiv onClick={viewHandler}>v</styles.VerticalDiv>
              <styles.HorizontalDiv onClick={viewHandler}>
                H
              </styles.HorizontalDiv>
            </styles.DisplayDiv>
          </styles.MidDiv>
          <Bookmarks />
        </styles.RightFullDiv>
      </styles.RightDiv>
    </styles.FullDiv>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: string) => dispatch(createFolderRequest(name)),
    requestFolders: () => dispatch(requestAllFolders()),
    searchBookmark: (name: string) => dispatch(searchBookmark(name)),
    cancelSearch: () => dispatch(cancelSearchBookmark()),
    toggleView: () => dispatch(toggleView()),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
