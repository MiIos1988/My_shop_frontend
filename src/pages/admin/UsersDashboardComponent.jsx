import { useEffect, useState } from "react";
import { isActive, userData } from "../../service/userService";

const UsersDashboardComponent = () => {
    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
      userData().then(res => setAllUser(res.data))
      .catch(err => console.log(err))
    },[]
    );

    const changeIsActive = (e, id) => {
        let checked = e.target.checked;
        isActive({checked, id}).then(res => console.log(res))
        .catch(err => console.log(err))
        
    }

    return (
        <div className="container-fluid">
    <h1 className=" container mt-5">Users</h1>
<div className="table-responsive-md">


<table className="table table-striped mt-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Full name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">City</th>
      <th scope="col">Is Active</th>
    </tr>
  </thead>
  <tbody>
    {
        allUser?.map((el, index) => {
            return <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{el.username}</td>
            <td>{el.firstName + " " + el.lastName}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
            <td>{el.city}</td>
            <td>
                <div className="form-check form-switch">
                <input  className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  defaultChecked={el.isActive} onChange={(event) => changeIsActive(event, el._id)}/>
                </div>
            </td>
          </tr>
        })
    }
    
    
  </tbody>
</table>
</div>
        </div>
    )
}

export default UsersDashboardComponent;