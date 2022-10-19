import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App";
import { Post } from "../pages/post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "post/*",
    element: <Post />,
  },
]);
