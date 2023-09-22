import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import { PrivateRoute } from "../hoc/PrivateRoute";

import { Layout } from "./Layout/Layout";

import "../css/App.css";

const Main = lazy(() => import("../pages/Main"));
// const Dictionary = lazy(() => import("../pages/Dictionary"));
const Login = lazy(() => import("../pages/Login"));
// const Recomend = lazy(() => import("../pages/Recomend"));
const Register = lazy(() => import("../pages/Register"));
// const Training = lazy(() => import("../pages/Training"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            // <PrivateRoute>
            <Main />
            // </PrivateRoute>
          }
        />
      </Route>

      <Route
          path="/register"
          element={
            // <PrivateRoute>
            <Register />
            // </PrivateRoute>
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
      
    </Routes>
  );
}

export default App;
