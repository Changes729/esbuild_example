import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const RecommendView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>RecommendView</h2>
    </div>
  );
};

export default RecommendView;