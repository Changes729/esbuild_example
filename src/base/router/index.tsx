import React from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router";

const HomeView = React.lazy(() => import("@/ui/views/home/index"));
const DownloadView = React.lazy(() => import("@/ui/views/download/index"));
const FocusView = React.lazy(() => import("@/ui/views/focus/index"));
const DiscoverView = React.lazy(() => import("@/ui/views/discover/index"));
const RankView = React.lazy(
  () => import("@/ui/views/discover/views/rank/index")
);
const RecommendView = React.lazy(
  () => import("@/ui/views/discover/views/recommend/index")
);
const ArtistView = React.lazy(
  () => import("@/ui/views/discover/views/artist/index")
);
const NewAudioView = React.lazy(
  () => import("@/ui/views/discover/views/new_audio/index")
);
const PlaylistView = React.lazy(
  () => import("@/ui/views/discover/views/playlist/index")
);
const RadiosView = React.lazy(
  () => import("@/ui/views/discover/views/radios/index")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    element: <HomeView />,
  },
  {
    path: "/download",
    element: <DownloadView />,
  },
  {
    path: "/focus",
    element: <FocusView />,
  },
  {
    path: "/discover",
    element: <DiscoverView />,
    children: [
      {
        path: "/discover",
        element: <Navigate to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        element: <RecommendView />,
      },
      {
        path: "/discover/rank",
        element: <RankView />,
      },
      {
        path: "/discover/artist",
        element: <ArtistView />,
      },
      {
        path: "/discover/new_audio",
        element: <NewAudioView />,
      },
      {
        path: "/discover/playlist",
        element: <PlaylistView />,
      },
      {
        path: "/discover/radios",
        element: <RadiosView />,
      },
    ],
  },
];

export default routes;
