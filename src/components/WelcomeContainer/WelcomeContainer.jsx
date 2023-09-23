import style from "./WelcomeContainer.module.css";

export const WelcomeContainer = ({ children }) => {
  return <div className={style.welcomeContainer}>
    { children }
  </div>;
};
