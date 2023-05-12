import {loadStripe} from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { paymentProduct } from "../service/userService";
import { Elements} from "@stripe/react-stripe-js"
import PaymentElementsComponent from "../components/payProductComponent/PaymentElementsComponent";

const pk = "pk_test_51MgyLeAoAwiaPpyxD5djKRFqbe0ycmT4ivIpXcuHAgrVoXzwWg0xXjeczsbRAb6cFW2VJy8gRGbvv5JxBt7Ujxoa0058YwhCt3";
const stripeObj = loadStripe(pk)


const PayPageComponent = () => {
    const [ck, setCk] = useState("")

    const totalPrice = useSelector(stor => stor.cartSlicer.totalPrice);

    useEffect(() => {
     totalPrice &&  paymentProduct({amount: totalPrice, currency: "USD"}).then(res => {
        setCk(res.data.client_secret)
     }).catch(err => console.log(err))
    },[totalPrice]
    )


    return (
        <>
            {ck && <Elements stripe={stripeObj} options={{clientSecret: ck}}>
                    <PaymentElementsComponent ck={ck}/>
                </Elements>}
        </>
    )
}

export default PayPageComponent