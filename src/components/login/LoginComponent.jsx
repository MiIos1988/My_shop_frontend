import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { saveUser, isAdminLogin } from "../../redux/userSlicer";
import {
  isAdmin,
  loginData,
  setTokenInLocalStorage,
} from "../../service/authService";
import jwt_decode from 'jwt-decode';
import { toggleLoader } from "../../redux/loaderSlicer";
import { useEffect, useState } from "react";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams()
  const [query, setQuery] = useState(0)

  useEffect(() => {
    setQuery(queryParams.get("id"))
    dispatch(toggleLoader(false));
  }, []
  )

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });

  const clickHandler = (data) => {
    loginData(data)
      .then((res) => {
        const decodedToken = jwt_decode(res.data.token);
        setTokenInLocalStorage(res.data.token);
        dispatch(saveUser(decodedToken));
        if (isAdmin()) {
          navigate("/dashboard");
          dispatch(isAdminLogin(true));
        } else {
          query ? navigate("/checkout") : navigate(-1)
          
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          clickHandler(values);
        }}
      >
        <div className="row justify-content-center mx-2">
          <Form className="  col-lg-4 ">
            <Field
              className="form-control my-2"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" />
            <Field
              className="form-control my-2"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="email" />

            <button className="btn btn-primary form-control" type="submit">
              Login
            </button>
            <br />
            <br />
            <Link
              to={"/register"}
              className="text-reset text-decoration-none d-flex justify-content-center"
            >
              If you don't have an account, register
            </Link>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default LoginComponent;
