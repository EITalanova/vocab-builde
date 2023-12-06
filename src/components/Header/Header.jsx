import { useAuth } from "../../hooks/useAuth";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as User } from "../../assets/header/user.svg";

import style from "./Header.module.css";


export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={style.header}>
      {isLoggedIn ? <p>OK</p> : <p>NO</p>}

      <div className={style.logoBox}>
        <Logo />
        <p className={style.logoText}>VocabBuilder</p>
      </div>

      <div className={style.btnHeader}>
        <button className={style.btn}>Dictionary</button>
        <button className={style.btn}>Recommend</button>
        <button className={style.btn}>Training</button>
      </div>

      <div className={style.userBox}>
        <p>Name</p>
        <div className={style.userIcon}>
          <User />
        </div>
      </div>
    </header>
  );
};
