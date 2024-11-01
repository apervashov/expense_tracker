import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Components/HomePage/HomePage";
import LoginPage from "../Components/LoginPage/LoginPage";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import Dashboard from "../Components/DashboardPage/DashboardPage";

export const router = createBrowserRouter([{
    path:"/",
    element: <App/>,
    children:[
        {path:"", element: <HomePage/>},
        {path:"login", element: <LoginPage/>},
        {path: "register", element: <RegisterPage/>},
        {path: "dashboard", element: <Dashboard/>}
    ]
}])