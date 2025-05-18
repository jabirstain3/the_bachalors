import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";

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
])

export default router;