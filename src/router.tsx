import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export { router };
