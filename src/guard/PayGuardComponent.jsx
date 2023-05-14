import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PayGuardComponent = ({ children }) => {
    const userStore = useSelector((store) => store.userSlicer.user);
    return userStore ? children : <Navigate to={"/login?id=1"} />
}

export default PayGuardComponent;