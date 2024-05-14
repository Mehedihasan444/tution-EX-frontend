import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Singin/SignIn";
import System_Access from "../Pages/System_Access/System_Access";
import ForgotPassword from "../Pages/Singin/ForgotPassword";
import Course_details from "../Pages/Course_details/Course_details";
import Software from "../Pages/Software/Software";
import SoftwareDetails from "../Pages/Software/SoftwareDetails";
import Dashboard from "../Layout/Dashboard";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Pages/PaymentFailed/PaymentFailed";
import Profile from "../Pages/Profile/Profile";
import Cart from "../Pages/Cart/Cart";
import Users from "../Pages/Users/Users";
import Admin_Home from "../Pages/Admin_Home/Admin_Home";
import About_Us from "../Pages/About_Us/About_Us";
import Add_a_Course from "../Pages/Add_a_Course/Add_a_Course";
import AddSoftwares from "../Pages/Add_Software/AddSoftwares";
import DisscusionForum from "../Pages/Discussion_forum/DisscusionForum";
import Shop from "../Pages/Shop/Shop";
import My_courses from "../Pages/My_courses/My_courses";
import My_software from "../dashboard/user/My_software";
import DisscusionForumDetails from "../Pages/Discussion_forum/DisscusionForumDetails";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import My_enrolled_courses from "../Pages/My_enrolled_courses/My_enrolled_courses";
import Purchase_History from "../dashboard/user/Purchase_History";
import All_softwares from "../dashboard/admin/All_softwares";
import All_courses from "../dashboard/admin/All_courses";

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
      {
        path: "/software/:categories/:id",
        element: <SoftwareDetails />,
      },
      {
        path: "/about-us",
        element: <About_Us />,
      },
      {
        path: "/forum",
        element: (
          <PrivateRoute>
            {" "}
            <DisscusionForum />
          </PrivateRoute>
        ),
      },
      {
        path: "/forum/:id",
        element: (
          <PrivateRoute>
            {" "}
            <DisscusionForumDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/shop",
        element: <Shop />,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard />{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/admin_home",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Admin_Home />
            </AdminRoute>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/all_users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Users />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/all_courses",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <All_courses />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/all_softwares",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <All_softwares />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // common routes
      {
        path: "/dashboard/admin/add_a_course",
        element: (
          <PrivateRoute>
            {" "}
            <Add_a_Course />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/add_a_software",
        element: (
          <PrivateRoute>
            {" "}
            <AddSoftwares />{" "}
          </PrivateRoute>
        ),
      },
      // user routes

      {
        path: "/dashboard/user/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/Cart",
        element: (
          <PrivateRoute>
            {" "}
            <Cart />
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/my_courses",
        element: (
          <PrivateRoute>
            {" "}
            <My_courses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my_enrolled_courses",
        element: (
          <PrivateRoute>
            {" "}
            <My_enrolled_courses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my_software",
        element: (
          <PrivateRoute>
            {" "}
            <My_software />
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/user/purchase_history",
        element: <Purchase_History />,
      },
    ],
  },
  {
    path: "/payment-complete/:transactionId",
    element: <PaymentSuccess />,
  },
  {
    path: "/payment-failed/:transactionId",
    element: <PaymentFailed />,
  },
]);

export default Route;
