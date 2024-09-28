import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./v1/styles/index.scss";

createRoot(document.getElementById("__next")).render(
   <StrictMode>
      <App />
   </StrictMode>
);
