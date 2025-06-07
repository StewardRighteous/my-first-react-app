import App from "./App";
import Profile from "./Profile";
import Tomato from "./Tomato";
import Onion from "./Onion";
import Default from "./Default";
import ErrorPage from "./error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {
        index: true,
        element: <Default />,
      },
      {
        path: "tomato",
        element: <Tomato />,
      },
      {
        path: "onion",
        element: <Onion />,
      },
    ],
  },
];

export default routes;
