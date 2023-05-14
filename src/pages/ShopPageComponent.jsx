import { useEffect } from "react";
import HeaderImageComponent from "../components/headerImageComponent/HeaderImageComponent"
import ProductListComponent from "../components/productListComponent.jsx/ProductListComponent"
import { useDispatch } from "react-redux";
import { toggleLoader } from "../redux/loaderSlicer";


const ShopPageComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoader(true));
  },[]
    
  )
  return (
    <div>
      <HeaderImageComponent title={"Shop"} link={"shop"} />
      <ProductListComponent />
    </div>
  )
}

export default ShopPageComponent
