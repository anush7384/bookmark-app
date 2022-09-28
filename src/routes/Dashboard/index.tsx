import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import Input from "../../components/shared/Input/index";
import {styles} from "./styles";
import Nav from "../../components/Nav/index";
import QuickLink from "../../components/QuickLink/index";
import { createFolderRequest, requestAllFolders } from "../../store/actions";
import LeftDashboard from '../../components/LeftDashboard/index';
import Bookmarks from "../../components/Bookmarks";

const searchIcon: string =
  require("../../utils/Images/search_icon.svg").default;


interface DashboardProps{
    createFolder:(name:string) => void,
    requestFolders:() => void,
}

const HeadDiv = styled.div`
    border:1px solid black;
`
const MidSearchDiv = styled.div`
  width:30%;
  height:70%;
  margin-top:7px;
  border:1px solid #dcdcdc;
  background-color:#f4f4f4;
  border-radius:10px;
  display:flex;
  flex-direction:row;
`
const MidSearchIconDiv = styled.div`
  width:5%;
  height:60%;
  margin-top:5px;
  margin-left:1%;
`
const MidInputDiv = styled.div`
  width:90%;
  height:98%;
`
const SearchIcon = styled.img`
  height:13px;
  margin-top:9px;
`
const AddLinkButton = styled.button`
  width: 18%;
  height: 45px;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
  margin-top:5px;
  margin-left:51.9%;
  background-color: white;
  border: none;
  border: 2px solid #5352ed;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  color: #5352ed;
`;

const Dashboard = (props:DashboardProps) => {
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
            <MidSearchDiv>
              <MidSearchIconDiv>
                <SearchIcon src={searchIcon} alt="icon" />
              </MidSearchIconDiv>
              <MidInputDiv>
                <Input type="text" where="search" placeholder="search..."/>
              </MidInputDiv>
            </MidSearchDiv>
            <AddLinkButton>+ ADD LINK</AddLinkButton>
          </styles.MidDiv>
          <Bookmarks/>
        </styles.RightFullDiv>
      </styles.RightDiv>
    </styles.FullDiv>
  );
};

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        createFolder:(name:string) => dispatch(createFolderRequest(name)),
        requestFolders :() => dispatch(requestAllFolders()),
    }
}

export default connect(null,mapDispatchToProps)(Dashboard);
