import HeaderImageComponent from "../components/headerImageComponent/HeaderImageComponent"
import ProductListComponent from "../components/productListComponent.jsx/ProductListComponent"


const ShopPageComponent = () => {
  return (
    <div>
      <HeaderImageComponent title={"Shop"} link={"shop"} />
      <ProductListComponent />
    </div>
  )
}

export default ShopPageComponent
