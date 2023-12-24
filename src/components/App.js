import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "../hooks/PrivateRoute";
import { PublicRoute } from "../hooks/PublicRoute";

import { Layout } from "./Layout/Layout";
import { Header } from "./Header/Header";

import "../css/App.css";

const Main = lazy(() => import("../pages/Main"));
const Dictionary = lazy(() => import("../pages/Dictionary"));
const Login = lazy(() => import("../pages/Login/Login"));
// const Recomend = lazy(() => import("../pages/Recomend"));
const Register = lazy(() => import("../pages/Register/Register"));
// const Training = lazy(() => import("../pages/Training"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            // <PrivateRoute>
            <Login />
            // </PrivateRoute>
          }
        />
        <Route
          path="/dictionary"
          element={
            // <PrivateRoute>
            <Dictionary />
            // </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
