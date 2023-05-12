import { Link } from "react-router-dom"

const GoToDashboard = () => {
    return <Link className="btn btn-warning btnDashboard" to={"/Dashboard"}>Dashboard</Link>
}

export default GoToDashboard