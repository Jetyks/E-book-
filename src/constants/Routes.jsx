import { Navigate, BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from '../pages/Home';

const Routes = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        }
        // Otras rutas...
    ]);

    return routes;
}

export default Routes