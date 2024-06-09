import { createBrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import App from "./App";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Shop from "./pages/Shop";
import Policies from "./pages/Terms/Policies";
import Conditions from "./pages/Terms/Conditions";
import Service from "./pages/TvService/service";
import ConfirmationPage from "./pages/TvService/conformation";

const Routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Homepage />
            },{
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
    },      
    {
        path: "tv01",
        element: <Service />,     
    },
    {
        path: "confirmation",
        element: <ConfirmationPage />
    }
])

export default Routes;