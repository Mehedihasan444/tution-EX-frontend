import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Singin/SignIn";
import System_Access from "../Pages/System_Access/System_Access";
import ForgotPassword from "../Pages/Singin/ForgotPassword";
import Course_details from "../Pages/Course_details/Course_details";
import Software from "../Pages/Software/Software";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course-details/:id",
        element: <Course_details />,
      },
      {
        path: "/software/:categories",
        element: <Software />,
      },
    ],
  },
  {
    path: "/system-access",
    element: <System_Access />,
    children: [
      {
        path: "/system-access/signIn",
        element: <SignIn />,
      },
      {
        path: "/system-access/ForgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/system-access/signUp",
        element: <Register />,
      },
    ],
  },
]);

export default Route;
