import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const FocusView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>FocusView</h2>
    </div>
  );
};

export default FocusView;