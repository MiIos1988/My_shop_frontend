import { Navigate } from "react-router-dom";
import { isAdmin } from "../service/authService";



export const AdminGuardComponent = ({ children }) => isAdmin() ? children : <Navigate to={"/"} />




