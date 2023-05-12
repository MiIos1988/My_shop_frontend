import { Navigate } from "react-router-dom";

const AuthGuardComponent = ({children}) => !localStorage.getItem("my_token") ? children : <Navigate to={"/"}/>


export default AuthGuardComponent;