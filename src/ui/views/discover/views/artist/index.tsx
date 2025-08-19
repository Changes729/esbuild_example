import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const ArtistView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>ArtistView</h2>
    </div>
  );
};

export default ArtistView;