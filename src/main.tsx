import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
