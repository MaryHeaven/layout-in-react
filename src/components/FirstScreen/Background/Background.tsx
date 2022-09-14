import React, { FC } from "react";
import './Background.css';
import imgGroup from './img/imageGroup2.png';

const Background: FC = () => {
  return (
    <div className="backgroundFirstScreen">
      <img src={imgGroup} alt="img" className="imgGroup" />
    </div>
  );
};

export default Background;
