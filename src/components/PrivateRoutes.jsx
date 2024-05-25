import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from ".../context/AuthContext/index";

const PrivateRoutes = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
