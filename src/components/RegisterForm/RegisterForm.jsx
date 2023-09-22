import { Formik, Field, Form, useFormikContext } from "formik";
import { RegistrSchema } from "../../utils/yup";

import style from './RegisterForm.module.css';

const InputField = ({ name, placeholder, type }) => {
  const { errors, touched } = useFormikContext();
  const error = touched[name] && errors[name];

  return (
    <>
      <Field type={type} name={name} placeholder={placeholder} />
      {touched[name] && error && <div className="error-message">{error}</div>}
    </>
  );
};

export const RegisterForm = () => {
  return (
    <>
      <div className={style.regFormContainer}>
        <h1 className={style.regFormTitle}>Register</h1>
        <p className={style.regFormDiscr}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>

        <Formik
          validationSchema={RegistrSchema}
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log("object");
            }, 1000);
          }}
        >
          <Form>
            <InputField name="name" placeholder="Name" />
            <InputField type="email" name="email" placeholder="Email" />
            <InputField name="password" placeholder="Password" />

            <button type="submit">Register</button>
          </Form>
        </Formik>
        <a className={style.regFormLink} href="#">
          Login
        </a>
      </div>
    </>
  );
};
