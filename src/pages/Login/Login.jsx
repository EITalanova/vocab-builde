import { LoginForm } from "../../components/LoginForm/LoginForm";
import { WelcomeContainer } from "../../components/WelcomeContainer/WelcomeContainer";

import style from "./Login.module.css";


const Login = () => {
  return (
    <WelcomeContainer>
      <p className={style.loginText}>Word · Translation · Grammar · Progress</p>
      <LoginForm />
    </WelcomeContainer>
  );
};

export default Login;
