import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { WelcomeContainer } from "../../components/WelcomeContainer/WelcomeContainer";

import style from "./Register.module.css";

const Register = () => {
  return (
    <WelcomeContainer>
      <RegisterForm />
    </WelcomeContainer>
  );
};

export default Register;
