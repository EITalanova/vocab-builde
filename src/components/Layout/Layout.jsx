import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { Header } from "../Header/Header";


import style from "./Layout.module.scss";


export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={style.container}>
      {isLoggedIn && <Header/>}
      <Suspense fallback={<div>gggg</div>}>
        <Outlet/>
      </Suspense>
    </div>
  );
};
