import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../screens/home/Home";
import About from "../screens/about/About";
import Cart from "../screens/cart/Cart";
import Component1 from "../screens/home/components/Component1";
import Component2 from "../screens/home/components/Component2";
import Component3 from "../screens/home/components/Component3";
import Products from "../screens/products/Products";
import ProductDetail from "../screens/products/ProductDetail";
import PageNotFound from "../PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/meet/:meetCode",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
  },
  {
    path: "/home/page2/",
    element: <Component1 />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
