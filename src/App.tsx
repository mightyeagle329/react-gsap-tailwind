import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import Section1 from "./views/Section1";
import Section2 from "./views/Section2";
import Section3 from "./views/Section3";
import Section4 from "./views/Section4";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/section-one",
    element: <Section1 />,
  },
  {
    path: "/section-two",
    element: <Section2 />,
  },
  {
    path: "/section-three",
    element: <Section3 />,
  },
  {
    path: "/section-four",
    element: <Section4 />,
  },
  {
    path: "*",
    element: <Navigate to='/' replace />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
