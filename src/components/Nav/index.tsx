import styled from "styled-components";

const ProfileDiv = styled.div`
  width: 20%;
  border: 1px solid grey;
  height: 50%;
  margin-left: 80%;
  display: flex;
  flex-direction: row;
`;
const UserDpDiv = styled.div`
  width: 17%;
  background-color: skyblue;
`;
const UserDetailDiv = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
const UserNameDiv = styled.div`
  height: 50%;
  background-color: yellow;
`;
const UserEmailDiv = styled.div`
  height: 50%;
  background-color: pink;
`;
const UserOptionDiv = styled.div`
  width: 8%;
  background-color: lightgreen;
`;

const Nav = () => {
    return (
      <>
        <ProfileDiv>
          <UserDpDiv>dp</UserDpDiv>
          <UserDetailDiv>
            <UserNameDiv>name</UserNameDiv>
            <UserEmailDiv>email</UserEmailDiv>
          </UserDetailDiv>
          <UserOptionDiv>:</UserOptionDiv>
        </ProfileDiv>
      </>
    );
}

export default Nav;