import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
