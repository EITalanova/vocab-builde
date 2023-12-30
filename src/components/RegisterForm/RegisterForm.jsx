import { Link } from "react-router-dom";

import { Formik, Field, Form, useFormikContext } from "formik";
import { RegistrSchema } from "../../utils/yup";

import { ReactComponent as ErrorIcon } from "../../assets/svg/login/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../assets/svg/login/validationSuccess.svg";

import style from "./RegisterForm.module.scss";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authThunk";

const InputField = ({ name, placeholder, type }) => {
  const { errors, touched } = useFormikContext();
  const error = touched[name] && errors[name];

  return (
    <>
      {/* <div className={style.regForm}> */}
      <Field
        className={style.regFormField}
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
      {/* </div> */}
    </>
  );
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <div className={style.regFormContainer}>
        <div className={style.regFormTextBox}>
          <h1 className={style.regFormTitle}>Register</h1>
          <p className={style.regFormDiscr}>
            To start using our services, please fill out the registration form
            below. All fields are mandatory:
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
          <Form className={style.regFormBox}
          onSubmit={handleSubmit}
          >
            <InputField name="name" placeholder="Name" />
            <InputField type="email" name="email" placeholder="Email" />
            <InputField name="password" placeholder="Password" />

            <button className={style.regFormLinkBtn} type="submit">
              Register
            </button>
          </Form>
        </Formik>
        <Link className={style.regFormLink} to="/login">
          Login
        </Link>
      </div>
    </>
  );
};
