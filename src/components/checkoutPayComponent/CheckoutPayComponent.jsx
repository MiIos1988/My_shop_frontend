import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isUserLogin } from "../../service/authService";
import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/loaderSlicer";

const CheckoutPayComponent = () => {

    const [loginUser, setLoginUser] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      let user = isUserLogin()
      const decodedToken = jwt_decode(user);
      setLoginUser(decodedToken._doc)
      dispatch(toggleLoader(false))
    },[]
    )

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phone: Yup.string().required().min(2, "Too Short!"),
    address: Yup.string().required(),
    city: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: loginUser?.email,
      firstName: loginUser?.firstName,
      lastName: loginUser?.lastName,
      phone: loginUser?.phone,
      address: "",
      city: loginUser?.city,
    },
    enableReinitialize: true,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
    navigate("/checkout/pay-product");
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">

      <form onSubmit={formik.handleSubmit} className="col-md-6  mt-5">
        <label htmlFor="firstName">First Name</label>
        <input
        className="form-control"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName || ""}
        /><br/>
        <label htmlFor="lastName">Last Name</label>
        <input
        className="form-control"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName || ""}
        /><br/>
        <label htmlFor="email">Email Address</label>
        <input
        className="form-control"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email || ""}
          /><br/>
        <label htmlFor="email">Phone</label>
        <input
        className="form-control"
        id="phone"
        name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone || ""}
        /><br/>
        <label htmlFor="email">Address</label>
        <input
        className="form-control"
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address || ""}
        /><br/>
        <label htmlFor="email">City</label>
        <input
        className="form-control"
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city || ""}
          /><br/>
        <button type="submit" className="form-control btn btn-primary" onClick={() => dispatch(toggleLoader(true))}>Continue payment</button>
      </form>
          </div>
      <Outlet/>
    </div>
  );
};

export default CheckoutPayComponent;
