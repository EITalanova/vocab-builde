import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { WelcomeContainer } from "../../components/WelcomeContainer/WelcomeContainer";
import { WordsTable } from "../../components/WordsTable/WordsTable";

import style from "./Register.module.css";

const Register = () => {
  return (
    <WelcomeContainer>
      <RegisterForm />
      <WordsTable />
    </WelcomeContainer>
  );
};

export default Register;
