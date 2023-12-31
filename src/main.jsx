import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.css";
import RecipeContextProvider from "./Components/Context/RecipeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
      <BrowserRouter>
         <RecipeContextProvider>
            <App />
         </RecipeContextProvider>
      </BrowserRouter>
);
