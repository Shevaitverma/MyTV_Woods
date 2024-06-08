import { createBrowserRouter} from "react-router-dom";
import Test from "./pages/Test";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import App from "./App";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Shop from "./pages/Shop";
import Policies from "./pages/Terms/Policies";
import Conditions from "./pages/Terms/Conditions";

const Routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "homepage",
                element: <Homepage />
            },
            {
                path: "contact",
                element: <Contactus />
            },
            {
                path: "about",
                element: <Aboutus />
            },
            {
                path: "*",
                element: <NotFound />
            },
            {
                path: "test",
                element: <Test />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "policies",
                element: <Policies />
            },
            {
                path: "terms",
                element: <Conditions />
            }
        ]
    }
])

export default Routes;