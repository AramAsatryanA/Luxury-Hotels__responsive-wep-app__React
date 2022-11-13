import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components-common/Layout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import FacilitiesPage from "./pages/Facilities";
import RoomsPage from "./pages/Rooms";
import ContactUsPage from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/facilities",
        element: <FacilitiesPage />,
      },
      {
        path: "/rooms",
        element: <RoomsPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
