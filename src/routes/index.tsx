import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import TodoMain from "../pages/todo";
import LocationMain from "../pages/location";

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
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
