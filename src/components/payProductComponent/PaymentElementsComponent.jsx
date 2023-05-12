import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../../redux/loaderSlicer";


const PaymentElementsComponent = ({ ck }) => {
  const stripe = useStripe();
  const elements = useElements()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleLoader(false))
  }, []
  )

  const onPay = () => {
    if (!stripe || !elements || !ck) {
      console.log("Error while paying.")
      return
    }
    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://my-shop-backend-3h5w.onrender.com'
      }
    })
  }

  return (
    <>
      {stripe && (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className=" col-md-6 ">
              <PaymentElement /><br />
              <button onClick={onPay} className="btn btn-primary form-control">Pay </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentElementsComponent;
