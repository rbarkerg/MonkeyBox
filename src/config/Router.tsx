import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AboutUs from "../pages/home/AboutUs";
import Services from "../pages/services/Services";
import ContactUs from "../pages/contact_us/ContactUs";
import ErrorPage from "../pages/error/ErrorPage";
import Root from "../pages/Root";
import Careers from "../pages/careers/Careers";
import Resources from "../pages/resources/Resources";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AboutUs />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'contactus',
        element: <ContactUs />,
      }
    ]
  }

]);
const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router