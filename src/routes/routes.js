import AuthGuardComponent from "../guard/AuthGuardComponent";
import App from "../App";
import ActivationAccountPageComponent from "../pages/ActivationAccountPageComponent";
import HomePageComponent from "../pages/HomePageComponent";
import LoginPageComponent from "../pages/LoginPageComponent";
import RegisterPageComponent from "../pages/RegisterPageComponent";
import ShopPageComponent from "../pages/ShopPageComponent";
import AdminPageComponent from "../pages/admin/AdminPageComponent";
import { AdminGuardComponent } from "../guard/AdminGuardComponent";
import CreateProductComponent from "../pages/admin/CreateProductComponent";
import ShowAllProduct from "../pages/admin/ShowAllProduct";
import UsersDashboardComponent from "../pages/admin/UsersDashboardComponent";
import ShowProductComponent from "../components/showProductComponent/ShowProductComponent";
import CartShopPage from "../pages/CartShopPage";
import CheckoutPayComponent from "../components/checkoutPayComponent/CheckoutPayComponent";
import PayGuardComponent from "../guard/PayGuardComponent";
import PayProductComponent from "../pages/PayPageComponent";
import PayAllComponent from "../components/checkoutPayComponent/PayAllComponent";
import ContactPage from "../pages/ContactPage";
import SearchPageComponent from "../pages/SearchPageConponent";
import CategoryPageComponent from "../pages/CategoryPageComponent";

const router = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePageComponent />,
      },
      {
        path: "register",
        element: (
          <AuthGuardComponent>
            <RegisterPageComponent />
          </AuthGuardComponent>
        ),
      },
      {
        path: "activation-account/:activationId",
        element: <ActivationAccountPageComponent />,
      },
      {
        path: "active",
        element: <ActivationAccountPageComponent />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "search",
        element: <SearchPageComponent />,
      },
      {
        path: "category",
        element: <CategoryPageComponent />,
      },
      {
        path: "login",
        element: (
          <AuthGuardComponent>
            <LoginPageComponent />
          </AuthGuardComponent>
        ),
      },
      {
        path: "shop",
        element: <ShopPageComponent />,
      },
      {
        path: "show-product",
        element: <ShowProductComponent />,
      },
      {
        path: "cart-shop",
        element: <CartShopPage />,
      },
      {
        path: "checkout",
        element: (
          <PayGuardComponent>
            <PayAllComponent />
          </PayGuardComponent>
        ),
        children: [
          {
            path: "",
            element: <CheckoutPayComponent />,
          },
          {
            path: "pay-product",
            element: <PayProductComponent />,
          },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AdminGuardComponent>
        <AdminPageComponent />
      </AdminGuardComponent>
    ),
    children: [
      {
        path: "",
        element: <UsersDashboardComponent />,
      },
      {
        path: "create-edit-product",
        element: <CreateProductComponent />,
      },
      {
        path: "create-edit-product/:id",
        element: <CreateProductComponent />,
      },
      {
        path: "show-product",
        element: <ShowAllProduct />,
      },
    ],
  },
];

export default router;
