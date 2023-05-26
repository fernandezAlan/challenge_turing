import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import SelectedAccount from "../views/SelectedAccount/SelectedAccount";
import { Routes,Route } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account",
    element: <SelectedAccount />,
  },
]);

export const App = ()=>{
  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<SelectedAccount />} />
  </Routes>
}

//export default router;
