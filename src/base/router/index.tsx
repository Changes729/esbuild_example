import React from "react";
import { RouteObject } from "react-router";
import HomeView from "@/ui/views/home/index";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/download",
    element: <div>download view</div>, // TODO: Lazy load this component
  },
  {
    path: "/focus",
    element: <div>focus view</div>, // TODO: Lazy load this component
  },
  {
    path: "/discover",
    element: <div>discover view</div>, // TODO: Lazy load this component
  }
];

export default routes;
