import React from "react";
import { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>Hello World2</div>, // TODO: Lazy load this component
  },
];

export default routes;
