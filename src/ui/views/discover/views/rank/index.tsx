import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const RankView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>RankView</h2>
    </div>
  );
};

export default RankView;