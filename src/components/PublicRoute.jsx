
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // agar user logged-in hai to dashboard / landing pe bhej do
  if (token) {
    return <Navigate to="/landing" replace />;
  }

  return children;
};

export default PublicRoute;
