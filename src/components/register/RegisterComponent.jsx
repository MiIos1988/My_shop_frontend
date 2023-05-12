import { Formik, Form, Field, ErrorMessage } from "formik";
import { userData } from "../../service/authService";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const RegisterComponent = () => {
    const [isRegister, setIsRegister] = useState(false);

    const params = useParams()

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        username: Yup.string()
            .min(4, "Too Short!")
            .max(30, "Too Long!")
            .required("Required"),
        password: Yup.string().min(2, "Too Short!").required("Required"),
        confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref("password")], "Your passwords do not match."),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        phone: Yup.string().required().min(2, "Too Short!"),
        city: Yup.string().required(),
    });

    return (
        <>
            {!isRegister ? (
                <>
                <h1 className="text-center mt-3">Register</h1>
                    <Formik
                        initialValues={{
                            email: "",
                            username: "",
                            password: "",
                            confirmPassword: "",
                            firstName: "",
                            lastName: "",
                            phone: "",
                            city: "",
                        }}
                        validationSchema={SignUpSchema}
                        onSubmit={(values) => {
                            // same shape as initial values
                            userData(values)
                                .then((res) => {
                                    console.log("working backend");
                                    setIsRegister(true);
                                })
                                .catch((error) => console.log(error));
                        }}
                    >
                            <div className="row justify-content-center mx-2">
                        <Form className="col-lg-4">
                            <Field
                                className="form-control my-2"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email" />
                            <Field
                                className="form-control my-2"
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                            <ErrorMessage name="username" />
                            <Field
                                className="form-control my-2"
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" />
                            <Field
                                className="form-control my-2"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                            />
                            <ErrorMessage name="confirmPassword" />
                            <Field
                                className="form-control my-2"
                                name="firstName"
                                type="text"
                                placeholder="First name"
                            />
                            <ErrorMessage name="firstName" />
                            <Field
                                className="form-control my-2"
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                            />
                            <ErrorMessage name="lastName" />
                            <Field
                                className="form-control my-2"
                                name="phone"
                                type="text"
                                placeholder="Phone"
                            />
                            <ErrorMessage name="phone" />
                            <Field
                                className="form-control my-2"
                                name="city"
                                type="text"
                                placeholder="City"
                            />
                            <ErrorMessage name="city" />

                            <button className="btn btn-primary my-2 form-control" type="submit">
                                Register
                            </button>
                        </Form>
                </div>
                    </Formik>
                    </>
            ) : (
                <>
                <div>Go to the email and click on the link</div>
                <Link to={"/"}>Back in Home</Link>
                </>
                
            )}
        </>
    );
};

export default RegisterComponent;
