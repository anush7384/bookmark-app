import { useState, ReactElement, Fragment, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import style from "./styles";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Container } from "../Signup";
import { LeftPage } from "../Signup";
import Input from "../../components/shared/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RightContainer } from "../Signup";
import { styles } from "./../../components/RightSignup/styles";
import { loginRequest } from "../../store/actions";
import { useGetState } from "../../hooks";

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

interface LoginPropsType {
  login: (obj: any) => void;
  spinner: boolean;
}

interface FormValues {
  email: string;
  password: string;
}

const Login = (props: LoginPropsType): ReactElement => {
  const [show, setShow] = useState(false);

  let {login} = useGetState();

  const showHandler = useCallback(() => {
    setShow(!show);
  },[show]);
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const registerSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .min(6)
      .required("Please enter your password")
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      //   "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
      // )
      ,
  });
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        props.login({ email: values.email, password: values.password });
        action.resetForm();
      },
    });
  return (
    <Fragment>
        <Container>
        <LeftPage />
          <RightContainer>
            <styles.FormDiv page="login">
              <styles.HeadingDiv>
                <styles.BackDiv>
                  <IoIosArrowRoundBack size="30px" />
                </styles.BackDiv>
                <styles.HeadDiv>
                  <b>Log In</b>
                </styles.HeadDiv>
              </styles.HeadingDiv>
              <form onSubmit={handleSubmit}>
                <styles.InputDiv>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </styles.InputDiv>
                {touched.email && errors.email ? (
                  <styles.ErrorDiv>{errors.email}</styles.ErrorDiv>
                ) : (
                  <></>
                )}
                <styles.InputDiv>
                  <Input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <style.ShowHideDiv>
                    {show ? (
                      <HideIcon onClick={showHandler} />
                    ) : (
                      <ShowIcon onClick={showHandler} />
                    )}
                  </style.ShowHideDiv>
                </styles.InputDiv>
                {touched.password && errors.password ? (
                  <styles.ErrorDiv>{errors.password}</styles.ErrorDiv>
                ) : (
                  <></>
                )}
                <styles.SignupDiv>
                  <styles.Button type="submit">
                    {props.spinner === true ? "Loging in....." : "Login"}
                  </styles.Button>
                </styles.SignupDiv>
              </form>
              <style.ForgotDiv>
                <div>
                  <style.ForgotA href="/forgot">forgot password</style.ForgotA>
                </div>
              </style.ForgotDiv>
              <styles.LoginDiv>
                <style.NoPara>
                  Don't have an account yet?
                  <Link to="/" style={{ color: "#5352ed" }}>
                    Sign Up
                  </Link>
                </style.NoPara>
              </styles.LoginDiv>
            </styles.FormDiv>
          </RightContainer>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (obj: any) => dispatch(loginRequest(obj)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    spinner: state.userAuth.loginSpinner,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
