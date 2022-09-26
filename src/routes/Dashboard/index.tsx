import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import  FolderCard from "./FolderCard";
import Nav from "../../components/Nav/index";
import QuickLink from "../../components/QuickLink/index";
import { createFolderRequest, requestAllFolders } from "../../store/actions";
import LeftDashboard from '../../components/LeftDashboard/index';

interface DashboardProps{
    createFolder:(name:string) => void,
    requestFolders:() => void,
    folders:any[],
}

const HeadDiv = styled.div`
    border:1px solid black;
`
const FullDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
`
const LeftDiv = styled.div`
  width: 18%;
  height: 100%;
  box-shadow: 0 0 45px lightgrey;
`;
const RightDiv = styled.div`
  width:81.5%;
  height:100%;
  display:flex;
  flex-direction:column;
`
const RightFullDiv = styled.div`
  // border:1px solid grey;
  width:94.5%;
  margin-left:4%;
  height:100%;
  display:flex;
  flex-direction:column;
`
const NavDiv = styled.div`
  height:12%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`
const QuickDiv = styled.div`
  height:34%;
`
const MidDiv = styled.div`
  height:8%;
  margin-top:2px;
  border:1px solid grey;
`


const Dashboard = (props:DashboardProps) => {
    // const [folder,setFolder] = useState(""); 
  return (
    <FullDiv>
      <LeftDiv><LeftDashboard/></LeftDiv>
      <RightDiv>
        <RightFullDiv>
          <NavDiv>
            <Nav/>
          </NavDiv>
          <QuickDiv><QuickLink/></QuickDiv>
          <MidDiv>Mid Div </MidDiv>
        </RightFullDiv>
        {/* <HeadDiv>
          <h1>DashBoard</h1>
          <input
            type="text"
            placeholder="Folder Name"
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
          />
          <button
            onClick={() => {
              props.createFolder(folder);
              setFolder("");
            }}
          >
            Create Folder
          </button>
          <br />
          <button
            onClick={() => {
              props.requestFolders();
            }}
          >
            Get All Folders
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              localStorage.clear();
            }}
          >
            Logout
          </button>
        </HeadDiv>
          {props.folders.map((folder) => {
            return (
              <FolderCard key={folder.id} id={folder.id} name={folder.name} />
            );
          })} */}
      </RightDiv>
    </FullDiv>
  );
};

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        createFolder:(name:string) => dispatch(createFolderRequest(name)),
        requestFolders :() => dispatch(requestAllFolders()),
    }
}

const mapStateToProps = (state:any) => {
    return{
        folders:state.folderReducer.folders,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
