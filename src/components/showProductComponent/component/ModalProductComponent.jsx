import { BsCheckLg } from 'react-icons/bs'
import { RiCloseFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleLoader } from '../../../redux/loaderSlicer'

const ModalProductComponent = ({ product, quantity, setViewModal }) => {
    const dispatch = useDispatch();

    return (
        <div className="modalDialog row d-flex align-items-center ">
            <div className="modalField border p-0">
                <div className="header d-flex justify-content-center align-items-center">
                    <div className='d-flex align-items-center'>
                        <BsCheckLg />
                        <p className='m-0 p-3 text-center'>Product successfully added to your shopping cart</p>
                        <RiCloseFill className='ms-5 exitModal' onClick={() => setViewModal(false)} />
                    </div>
                </div>
                <div className='product d-flex'>
                    <div className='imageField'><img src={product?.imgUrl} alt="" /></div>
                    <div className='border-end titleField'>
                        <h4 className='mt-3 mb-5 title'>{product?.title}</h4>

                        <div className='priQu'>
                            <p><b>Price:</b>  ${product?.price}</p>
                            <p><b>Quantity:</b>  ${quantity}</p>
                        </div>
                    </div>
                    <div className='endField p-5' >
                        <div className='end'>
                            <p><b>Total price: </b> {product?.price * quantity}</p>
                            <p><b>Total shipping: </b> $0.00</p>
                            <p><b>Taxes: </b> $0.00</p>
                            <p><b>Total: </b>${product?.price * quantity}</p>
                        </div>
                        <div className='allBtn' >
                            <Link className='btn btn-secondary me-5' to={"/shop"}>Continue Shopping </Link>
                            <Link className='btn btn-dark' to={"/checkout"} onClick={() => dispatch(toggleLoader(true))}>Pay products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalProductComponent;