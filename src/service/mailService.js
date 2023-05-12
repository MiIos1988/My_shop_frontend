import axios from "axios";

export const sendContactMail = (body) => axios.post("/mail/send-contact", body)