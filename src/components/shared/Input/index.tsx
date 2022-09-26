import styled from "styled-components";

interface InputProps{
  use?:"dashboard";
}

const Input = styled.input`
  height: 100%;
  width: 89%;
  padding-left:5px;
  color: #91919f;
  border-radius: 10px;
  border: none;
  font-size: medium;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: ${(props:InputProps) =>(props.use === "dashboard" ? "small":"")};
  }
`;

export default Input;
