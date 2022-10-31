import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import SelectedAccount from "../views/SelectedAccount/SelectedAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account",
    element: <SelectedAccount />,
  },
]);

export default router;
