import {createBrowserRouter} from "react-router-dom";
import routesPublic from "./public.routers";
// import routesPrivate from "./private.routers";

const routes = createBrowserRouter([...routesPublic]);

export default routes;
