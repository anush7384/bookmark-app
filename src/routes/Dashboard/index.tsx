import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import  FolderCard from "./FolderCard";
import { createFolderRequest, requestAllFolders } from "../../store/actions";

interface DashboardProps{
    createFolder:(name:string) => void,
    requestFolders:() => void,
    folders:any[],
}

const HeadDiv = styled.div`
    margin-left:20%;
    margin-bottom:25px;
`

const Dashboard = (props:DashboardProps) => {
    const [folder,setFolder] = useState(""); 
  return (
    <>
      <HeadDiv>
        <h1>DashBoard</h1>
        <input
          type="text"
          placeholder="Folder Name"
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
      <ul>
        {props.folders.map((folder) => {
          // return <li key={folder.id}>{folder.name}</li>
          return (
            <FolderCard key={folder.id} id={folder.id} name={folder.name} />
          );
        })}
      </ul>
    </>
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
