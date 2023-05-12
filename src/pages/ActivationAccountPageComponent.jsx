import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { userActive } from "../service/authService";

const ActivationAccountPageComponent = () => {
    const params = useParams()
    const userId = params.activationId;
    const navigate = useNavigate()

    useEffect(() => {
        userActive({ "_id": userId }).then(data => {
            navigate("/")
        })
            .catch(error => console.log("Problem in activation email."));
    }, []
    )


    return <h1>Work</h1>



}

export default ActivationAccountPageComponent