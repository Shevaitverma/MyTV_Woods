import { createBrowserRouter} from "react-router-dom";
import Test from "./pages/Test";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import App from "./App";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "homepage",
                element: <Homepage />
            },
            {
                path: "blog",
                element: <Blog />
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
            }
        ]
    }
])

export default Routes;