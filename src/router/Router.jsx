import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import LogInPage from "../pages/logInPage/LogInPage.jsx";
import RegistrationPage from "../pages/registrationPage/RegistrationPage.jsx";
import AllItemsLayout from "../layouts/allItemsLayout/AllItemsLayout.jsx";
import ItemDetailsLayout from "../layouts/itemDetailsLayout/ItemDetailsLayout.jsx";
import OrderItem from "../components/orderItem/OrderItem.jsx";
import MyItemsLayout from "../layouts/myItemsLayoute/MyItemsLayout..jsx";
import CreateItemLayout from "../layouts/createItemLayout/CreateItemLayout.jsx";
import UpdateItemLayout from "../layouts/updateItemLayout/UpdateItemLayout.jsx";
import MyOrderLayout from "../layouts/myOrderLayout/MyOrderLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <HomeLayout />,                
                loader: () => fetch(`${import.meta.env.VITE_DOMAIN}/items/bestseller`)
            },
            {
                path: "items",
                element: <AllItemsLayout />,                
            },
            {
                path: "add_items",
                element: <CreateItemLayout />,                
            },
            {
                path: "item/:id",
                element: <ItemDetailsLayout />,                
            },
            {
                path: "item/:id/update",
                element: <UpdateItemLayout />,                
            },
            {
                path: "item/:id/puechase",
                element: <OrderItem />,                
            },
            {
                path: ":userbase/items",
                element: <MyItemsLayout />,                
            },
            {
                path: ":userbase/my_orders",
                element: <MyOrderLayout />,                
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
    {
        path: "login",
        element: <LogInPage />,
    },
    {
        path: "registration",
        element: <RegistrationPage />,
    },

])

export default router;