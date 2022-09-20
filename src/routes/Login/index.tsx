import { useState, ReactElement } from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  Formik,
  Field,
  FormikState,
  FormikHelpers,
  FieldInputProps,
  ErrorMessage,
  useFormik,
} from "formik";
import * as Yup from "yup";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Container } from "../Signup";
import { LeftPage } from "../Signup";
import Input from "../../components/shared/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RightContainer } from "../Signup";
import { styles } from "./../../components/RightSignup/styles";
import { loginRequest } from "../../store/actions";

const ShowHideDiv = styled.div`
  width: 13%;
  height: 40%;
  margin-top: 3.5%;
  @media screen and (max-width: 900px) {
    margin-top: 7%;
    margin-left: 3%;
  }
  @media screen and (max-width: 600px) {
    margin-top: 4.5%;
    margin-left: 0;
  }
  @media screen and (max-width: 400px) {
    margin-top: 7%;
  }
`;

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
const ForgotDiv = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  font-size: medium;
`;
const ForgotA = styled.a`
  color: #5352ed;
  text-decoration: none;
`;
const NoPara = styled.p`
  color: #91919f;
  @media screen and (max-width: 400px) {
    font-size: small;
  }
  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
  @media screen and (max-width: 865px) {
    font-size: 13px;
    margin-top: 2%;
  }
`;

interface LoginPropsType {
  login: (obj: any) => void;
}

interface FormValues {
  email: string;
  password: string;
}

const Login = (props: LoginPropsType): ReactElement => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const registerSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
  });
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        props.login({email:values.email,password:values.password});

        action.resetForm();
      },
    });

  return (
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
                />
              </styles.InputDiv>
              {errors.email ? <styles.ErrorDiv>{errors.email}</styles.ErrorDiv> : <></>}
              <styles.InputDiv>
                <Input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ShowHideDiv>
                  {show ? (
                    <HideIcon onClick={showHandler} />
                  ) : (
                    <ShowIcon onClick={showHandler} />
                  )}
                </ShowHideDiv>
              </styles.InputDiv>
              {errors.password ? <styles.ErrorDiv>{errors.password}</styles.ErrorDiv> : <></>}
              <styles.SignupDiv>
                <styles.Button type="submit">Login</styles.Button>
              </styles.SignupDiv>
            </form>
          <ForgotDiv>
            <div>
              <ForgotA href="/forgot">forgot password</ForgotA>
            </div>
          </ForgotDiv>
          <styles.LoginDiv>
            <NoPara>
              Don't have an account yet? <styles.A href="/">Sign Up</styles.A>
            </NoPara>
          </styles.LoginDiv>
        </styles.FormDiv>
      </RightContainer>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (obj: any) => dispatch(loginRequest(obj)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
