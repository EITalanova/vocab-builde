import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import style from "./WelcomeContainer.module.css";

export const WelcomeContainer = ({ children }) => {
  return <div className={style.welcomeContainer}>
      <div className={style.regFormHeader}>
        <LogoIcon />
        <p>VocabBuilder</p>
      </div>
    { children }
  </div>;
};
