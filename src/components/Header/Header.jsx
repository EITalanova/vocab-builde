
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as User } from "../../assets/svg/header/user.svg";

import { useAuth } from "../../hooks/useAuth";

import style from "./Header.module.css";

export const Header = () => {
  const { user } = useAuth();

   if (!user) {
    // You can handle the case when user is null or not fully loaded
    return <p>Loading...</p>;
  }

  return (
    <header className={style.header}>

      <div className={style.logoBox}>
        <Logo />
        <p className={style.logoText}>VocabBuilder</p>
      </div>

      <div className={style.btnHeader}>
        <Link className={style.btn} to="/dictionary">Dictionary</Link>
        <Link className={style.btn} to="/recommend">Recommend</Link>
        <Link className={style.btn} to="/training">Training</Link>
      </div>

      <div className={style.userBox}>
        <p>{user.name}</p>
        <div className={style.userIcon}>
          <User />
        </div>
      </div>
    </header>
  );
};
