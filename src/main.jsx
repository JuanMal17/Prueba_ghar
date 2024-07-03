import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import ErrorPage from "./heroes/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <HeroesApp/>,
    errorElement : <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
