import { Formik, Field, Form, useFormikContext } from "formik";
import { RegistrSchema } from "../../utils/yup";

import style from "./LoginForm.module.css";

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
      {touched[name] && error && <div className="error-message">{error}</div>}
    </>
  );
};

export const LoginForm = () => {
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
            <InputField name="password" placeholder="Password" />

            <button className={style.logFormLinkBtn} type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <a className={style.logFormLink} href="#">
          Register
        </a>
      </div>
    </>
  );
};
