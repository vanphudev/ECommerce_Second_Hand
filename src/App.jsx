import {RouterProvider} from "react-router-dom";
import routes from "./v1/routers";

function App() {
   return (
      <>
         <RouterProvider router={routes} />
      </>
   );
}

export default App;
