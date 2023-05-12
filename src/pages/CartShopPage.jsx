import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuantityProductComponent from "../components/showProductComponent/component/QuantityProductComponent"
import { addTotalPrice, removeProduct } from "../redux/cartSlicer";

const CartShopPage = () => {

    const cartSlicer = useSelector((store) => store.cartSlicer.cart);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const totalPrice = cartSlicer.map(el => el.price * el.quantity).reduce((acc, curr) => acc + curr, 0)
        dispatch(addTotalPrice(totalPrice));
    }, []
    )

    return (
        <div className="container mt-5 cartShop">
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th className="col-5" scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col" >Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartSlicer.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        <div className="cartProduct d-flex align-middle">
                                            <img src={el.imgUrl} alt="" />
                                            <p className="m-0 px-4 align-middle cartP">{el.title}</p>
                                        </div>
                                    </td>
                                    <td>${el.price}</td>
                                    <td  ><QuantityProductComponent cartShop={true} quantity={el.quantity} price={el.price} id={el.id} /> </td>
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            {el.price * el.quantity}
                                            <button onClick={() => {
                                                dispatch(removeProduct(el.id))
                                            }}>X</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end pe-5"><b>Total for pay:</b></td>
                        <td ><b>{
                            cartSlicer.map(el => el.price * el.quantity).reduce((acc, curr) => acc + curr, 0)

                        }</b></td>
                    </tr>
                </tfoot>
            </table>
            <Link className="btn btn-dark payBtn col-6 offset-6 p-2" to={"/checkout"}>Pay products</Link>
        </div>
    )
}

export default CartShopPage