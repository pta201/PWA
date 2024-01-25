import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import TodoMain from "../pages/todo";
import LocationMain from "../pages/location";
import Spam from "../pages/spam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <></>,
      },
      {
        path: "todo",
        element: <TodoMain />,
      },
      {
        path: "location",
        element: <LocationMain />,
      },
      {
        path: "spam",
        element: <Spam />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
