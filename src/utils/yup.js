import * as Yup from "yup";

export const RegistrSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .typeError("Must be string")
    .min(1, "Your username is too short")
    .max(16, "Username cannot be longer than 16 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email")
    .trim()
    .min(7, "Your email is too short")
    .max(35, "Email cannot be longer than 35 characters")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"),
  password: Yup.string()
    .required("Please enter your password")
    .trim()
    .min(6, "Your password is too short")
    .max(12, "Password cannot be longer than 12 characters")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "The password must be seven characters including at least one number"
    ),
});
