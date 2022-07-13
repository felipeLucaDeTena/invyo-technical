import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../context/auth-context";

export function RequireAuth({ children }) {
  const { authState } = useAuth();
  const location = useLocation();
  if (authState.isAuthenticated === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
