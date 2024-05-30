import { useRoutes } from "react-router-dom";
import Test from "./pages/Test";

const Routes = () =>{
    const element = useRoutes([
        {path: "/", element: <Test/>}
    ])
    return element;
}

export default Routes;