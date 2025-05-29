import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import LogInPage from "../pages/logInPage/LogInPage.jsx";
import RegistrationPage from "../pages/registrationPage/RegistrationPage.jsx";

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