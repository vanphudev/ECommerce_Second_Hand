import {RouterProvider} from "react-router-dom";
import routes from "./v1/routers";
import {Spin} from "antd";
import {Suspense} from "react";
function App() {
   return (
      <>
         <Suspense fallback={<Spin size='large' fullscreen style={{zIndex: 10000}} />}>
            <RouterProvider router={routes} />
         </Suspense>
      </>
   );
}

export default App;
