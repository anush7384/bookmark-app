import styled from "styled-components";

interface InputProps {
  use?: "dashboard";
  where?:"search",
}

const Input = styled.input`
  height: 100%;
  width: 89%;
  padding-left: 5px;
  border-radius: 10px;
  border: none;
  font-size: medium;
  :focus {
    outline: none;
  }
  background-color: ${(props:InputProps) => 
    props.where === "search" ? "transparent":"none"};
  };
  color: ${(props: InputProps) =>
    props.use === "dashboard" ? "#5352ED" : "#91919f"};
  ::placeholder {
    font-size: ${(props: InputProps) =>
      props.use === "dashboard" ? "small" : ""};
    color: ${(props: InputProps) =>
      props.use === "dashboard" ? "darkblue" : "#91919f"};
  }
`;

export default Input;
