import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <HomeLayout />,
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
])

export default router;