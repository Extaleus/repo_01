import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Maps } from "./components/content/Maps/Maps";
import { Content } from "./components/content/Content";
import { Progression } from "./components/content/Progression/Progression";
import { Calculators } from "./components/content/Calculators/Calculators";
import { GunsAmmo } from "./components/content/Guns-Ammo/Guns-Ammo";
import { More } from "./components/content/More/More";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />,
      },
      {
        path: "maps",
        element: <Maps />,
      },
      {
        path: "progression",
        element: <Progression />,
      },
      {
        path: "calcs",
        element: <Calculators />,
      },
      {
        path: "guns-ammo",
        element: <GunsAmmo />,
      },
      {
        path: "moreinfo",
        element: <More />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
