import { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import{Link, redirect} from "react-router-dom";

import { signUpRequest } from "../../store/actions";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import Input from "../shared/Input";
import { styles } from "./styles";

const ShowIcon = styled(FaRegEye)`
  width: 100%;
  color: grey;
  opacity: 60%;
  @media screen and(max-width:400px) {
    width: 10%;
  }
`;
const HideIcon = styled(FaRegEyeSlash)`
  width: 100%;
  color: grey;
  opacity: 60%;
  @media screen and(max-width:400px) {
    width: 50%;
  }
`;

const GoogleIcon = styled(FcGoogle)`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 850px) {
    height: 90%;
    width: 90%;
  }
`;


interface RightSignupProps {
  signUp: (obj: any) => void;
}

const RightSignup = (props: RightSignupProps) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  interface FormValues {
    name: string;
    email: string;
    password: string;
  }

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  const registerSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .min(8)
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues,
    validationSchema: registerSchema,
    validateOnChange: true,
    validateOnBlur: false,
    
    onSubmit: (values, action) => {
      let user ={
        name:values.name,
        email:values.email,
        password:values.password,
      }
      props.signUp(user);
      action.resetForm();
    },
  });
  
  return (
    <styles.FormDiv page="signup">
      <styles.HeadingDiv>
        <styles.BackDiv>
          <IoIosArrowRoundBack size="30px" />
        </styles.BackDiv>
        <styles.HeadDiv>
          <b>Sign Up</b>
        </styles.HeadDiv>
      </styles.HeadingDiv>
      <form onSubmit={handleSubmit}>
        <styles.InputDiv>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
        </styles.InputDiv>
        {touched.name && errors.name ? (
          <styles.ErrorDiv>{errors.name}</styles.ErrorDiv>
        ) : null}
        <styles.InputDiv>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
        </styles.InputDiv>
        {touched.email && errors.email ? (
          <styles.ErrorDiv>{errors.email}</styles.ErrorDiv>
        ) : null}
        <styles.InputDiv>
          <Input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          <styles.ShowHideDiv>
            {show ? (
              <HideIcon onClick={showHandler} />
            ) : (
              <ShowIcon onClick={showHandler} />
            )}
          </styles.ShowHideDiv>
        </styles.InputDiv>
        {touched.password && errors.password ? (
          <styles.ErrorDiv>{errors.password}</styles.ErrorDiv>
        ) : (
          <></>
        )}
        <styles.ConsentDiv>
          <styles.Check type="checkbox" />
          <styles.Para>
            By signing up, you agree to the
            <styles.TermsA href="/terms">
              {" "}
              Terms of Service and Privacy Policy
            </styles.TermsA>
          </styles.Para>
        </styles.ConsentDiv>
        <styles.SignupDiv>
          <styles.Button type="submit">Sign Up </styles.Button>
        </styles.SignupDiv>
      </form>
      <styles.OrDiv>
        <styles.OrP>
          <b>Or with</b>
        </styles.OrP>
      </styles.OrDiv>
      <styles.GoogleDiv>
        <styles.IconDiv>
          <GoogleIcon />
        </styles.IconDiv>
        <styles.Para>
          <styles.CustomB>Sign Up with Google</styles.CustomB>
        </styles.Para>
      </styles.GoogleDiv>
      <styles.LoginDiv>
        <styles.BottomPara>
          Already have an account? <Link style={{color:"#5352ed"}}to="/login"> Login</Link>
        </styles.BottomPara>
      </styles.LoginDiv>
    </styles.FormDiv>
  );
};

interface ObjType{
    name:string,
    email:string,
    password:string,
  };

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (obj: ObjType) => dispatch(signUpRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(RightSignup);
