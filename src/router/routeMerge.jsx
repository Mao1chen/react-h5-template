import React, { lazy } from "react";

const routes = [
  {
    name: "404",
    path: "*",
    meta: {
      title: "Not Found 404",
    },
    component: lazy(() => import("@/view/Error404/Error404")),
  },
];

export default routes;
