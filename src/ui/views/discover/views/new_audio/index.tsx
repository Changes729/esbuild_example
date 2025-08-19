import React from "react";

interface IProps {
  children?: React.ReactNode;
}

const NewAudioView: React.FC<IProps> = ({ props }) => {
  return (
    <div>
      <h2>NewAudioView</h2>
    </div>
  );
};

export default NewAudioView;