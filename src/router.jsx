import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pizzas",
        element: <Pizzas />,
      },
    ],
  },
]);

export default router;
