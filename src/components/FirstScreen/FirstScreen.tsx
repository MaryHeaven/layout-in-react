import React, { FC } from "react";
import Background from "./Background/Background";
import './FirstScreen.css';

const FirstScreen: FC = () => {
  return (
    <div>
      <span className="texts">
      <h1 className="h1">АКТИВИРУЙ ИММУНИТЕТ!</h1>
      <p className="text1">
        Всего пять секунд в день помогут укрепить иммунитет
        и повысить защитные силы организма
      </p>
      <p className="text2">
        NOOTRIS ПОМОГАЕТ
      </p>
      <p className="text3">
        Вашему организму во время пандемии
        и сезонных простуд
      </p>
      </span>
      <Background />
    </div>
  );
};

export default FirstScreen;
