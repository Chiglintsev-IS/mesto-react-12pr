import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({loggedIn, children}) => {
  return loggedIn
    ? (children || <Outlet/>)
    : <Navigate to="/sign-in" replace/>;
};

export default ProtectedRoute;
