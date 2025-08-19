import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const PlaylistView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>PlaylistView</h2>
    </div>
  );
};

export default PlaylistView;