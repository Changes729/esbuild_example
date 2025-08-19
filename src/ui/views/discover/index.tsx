import React, { Suspense } from "react";
import { Link, Outlet } from "react-router";

interface IProps {
  children?: React.ReactNode;
}

const DiscoverView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <div className="navigate">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/rank">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
        <Link to="/discover/radios">博客</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/new_audio">新碟上架</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DiscoverView;
