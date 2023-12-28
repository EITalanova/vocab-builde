import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as User } from "../../assets/svg/header/user.svg";
import { ReactComponent as Menu } from "../../assets/svg/header/menu.svg";

import { useAuth } from "../../hooks/useAuth";

import style from "./Header.module.scss";

export const Header = () => {
  const { user, isLoggedIn } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <header className={style.header}>
      {/* <div className={style.headerBox}>
        <p>Portfolio</p>
        <ul className={style.menu}>
          <li><div className={style.userIconQ}>
          <User />
        </div></li>
          <li><div className={style.userIconQ}>
          <User />
        </div></li>
          <li><div className={style.userIconQ}>
          <User />
        </div></li>
        </ul>
        <p>g</p>
      </div>
      
      <div className={style.box}>
        <div className={style.card}>f</div>
        <div className={style.card}></div>
        <div className={style.card}></div>
      </div> */}

      <div className={style.logoBox}>
        <Logo />
        <p className={style.logoText}>VocabBuilder</p>
      </div>

      {isLoggedIn && (
        <>
          <div className={style.btnHeader}>
            <Link className={style.btn} to="/dictionary">
              Dictionary
            </Link>
            <Link className={style.btn} to="/recommend">
              Recommend
            </Link>
            <Link className={style.btn} to="/training">
              Training
            </Link>
          </div>

          <div className={style.userBox}>
            <p className={style.userText}>{user.name}</p>
            <div className={style.userIcon}>
              <User className={style.user} />
            </div>
            <button className={style.menu}>
              <Menu className={style.menuF}/>
            </button>
          </div>
        </>
      )}
    </header>
  );
};
