import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth;

  if (!isLoggedIn) {
    return <Navigate to="/register" />;
  }
  return children;
};
