import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { sendContactMail } from "../service/mailService";

const ContactPage = () => {
    const navigate = useNavigate();

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        subject: Yup.string().required(),
        message: Yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            sendMail(values)
            navigate("/")
        },
    });

    const sendMail = (mess) => {
        sendContactMail(mess).then(res => console.log(res.config.data))
    }

    return (
        <div className="row justify-content-center">


            <form onSubmit={formik.handleSubmit} className="col-md-6  mt-5">
                <p className="display-5">Contact</p>
                <input
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                /><br />
                <input
                    className="form-control"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    type="text"
                    onChange={formik.handleChange}
                /><br />
                <textarea
                    className="form-control"
                    placeholder="Message"
                    id="message"
                    name="message"
                    type="text"
                    rows={10}
                    onChange={formik.handleChange}
                ></textarea> <br />

                <button type="submit" className="form-control btn btn-primary">Send message</button>
            </form>
        </div>
    )
}

export default ContactPage;