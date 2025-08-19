import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const RadiosView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>RadiosView</h2>
    </div>
  );
};

export default RadiosView;