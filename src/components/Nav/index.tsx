import styled from "styled-components";
import { useGetState } from "../../hooks";

const dp:string = require("../../utils/Images/profilePicture.svg").default;

const ProfileDiv = styled.div`
  width: 20%;
  border-radius:10px;
  height: 60%;
  margin-left: 82%;
  display: flex;
  flex-direction: row;
`;
const UserDpDiv = styled.div`
  width: 17%;
  height:120%;
  border-radius:5px;
`;
const UserDetailDiv = styled.div`
  width: 78%;
  display: flex;
  margin-left:5px;
  height:90%;
  margin-top:3%;
  font-family:"Inter",sans-serif;
  font-size:13px;
  flex-direction: column;
`;
const UserNameDiv = styled.div`
  height: 50%;
  font-size:16px;
`;
const UserEmailDiv = styled.div`
  height: 40%;
`;
const Image = styled.img`
  height:100%;
  width:100%;
`

const Nav = () => {
  let { user } = useGetState();
    return (
      <>
        <ProfileDiv>
          <UserDpDiv><Image src={dp} alt="dp"/></UserDpDiv>
          <UserDetailDiv>
            <UserNameDiv>{user.name}
              {/* {user.name} */}
            </UserNameDiv>
            <UserEmailDiv>{user.email}
              {/* {user.email} */}
            </UserEmailDiv>
          </UserDetailDiv>
        </ProfileDiv>
      </>
    );
}

export default Nav;