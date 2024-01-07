import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loadding} = useContext(authContext)
    const location = useLocation();

  if(loadding) <Loader />

  if(user && user?.email) {
    return children
  }

  return <Navigate state={location?.pathname} to={"/login"} />;
};

export default PrivateRoute;
