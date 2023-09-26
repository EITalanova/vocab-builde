import { Link } from "react-router-dom";

import { Formik, Field, Form, useFormikContext } from "formik";
import { RegistrSchema } from "../../utils/yup";

import { ReactComponent as ErrorIcon } from "../../assets/svg/login/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../assets/svg/login/validationSuccess.svg";
import { ReactComponent as VisibleIcon } from "../../assets/svg/login/visible.svg";
import { ReactComponent as InvisibleIcon } from "../../assets/svg/login/invisible.svg";

import style from "./LoginForm.module.css";
import { useState } from "react";

const InputField = ({ name, placeholder, type }) => {
  const { errors, touched } = useFormikContext();
  const error = touched[name] && errors[name];

  return (
    <>
      <Field
        className={style.logFormField}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {touched[name] && error && (
        <div className={style.messageError}>
          <ErrorIcon />
          <span>{error}</span>
        </div>
      )}

      {touched[name] && !error && (
        <div className={style.messageSuccess}>
          <SuccessIcon />
          <span> Success {name}</span>
        </div>
      )}
    </>
  );
};

export const LoginForm = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <>
      <div className={style.logFormContainer}>
        <div className={style.logFormTextBox}>
          <h1 className={style.logFormTitle}>Login</h1>
          <p className={style.logFormDiscr}>
            Please enter your login details to continue using our service:
          </p>
        </div>

        <Formik
          validationSchema={RegistrSchema}
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log("object");
            }, 1000);
          }}
        >
          <Form className={style.logFormBox}>
            <InputField type="email" name="email" placeholder="Email" />
            <div className={style.logFormPassword}>
              <InputField
                type={passwordVisibility ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <button
                className={style.logFormEye}
                onClick={changePasswordVisibility}
              >
                {passwordVisibility ? <InvisibleIcon /> : <VisibleIcon />}
              </button>
            </div>

            <button className={style.logFormLinkBtn} type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <Link className={style.logFormLink} to="/register">
          Register
        </Link>
      </div>
    </>
  );
};
