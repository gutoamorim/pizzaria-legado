import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Pizzas from "./components/Pizzas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pizzas",
    element: <Pizzas />,
  },
]);

export default router;
