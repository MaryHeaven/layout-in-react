import React from "react";
import './SecondScreen.css';
import ginger from './img/ginger.png';
import vitaminDrink from './img/nootris.png';
import virus from './img/vorus.png';

const SecondScreen = () => {
  return (
    <div className="backgroundSecondScreen">
      <div className="div_elements">
        <span className="head">
          <h1 className="h1_1">
            ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
          </h1>
          <h1 className="h1_2">
            СО СКИДКОЙ -15% ПЕРВЫМ!
          </h1>
        </span>
        <div className="price_div">
          <span className="price1">750₽</span>
          <span className="price2">690₽</span>
        </div>
        <div className="img_div">
          <img src={ginger} alt="ginger" className="ginger" />
          <div className="div_text_mobile"><span>Содержит</span><span className="div_orange">&nbsp; имбирь</span></div>
          <img src={vitaminDrink} alt="vitamin drink" className="vitaminDrink" />
          <div className="div_text_mobile"><span>+ Бесплатная доставка</span><span className="div_orange">&nbsp; Специальная цена</span></div>
          <img src={virus} alt="virus" className="virus" />
          <div className="div_text_mobile"><span>Нейтрализует</span><span className="div_orange">&nbsp; вирусы</span></div>
        </div>
        <div className="div_texts">
          <div className="div_text_1">
            <div>
              Содержит
            </div>
            <div className="div_orange">
              имбирь
            </div>
          </div>
          <div className="div_text_2">
            <div className="text2_1">
              + Бесплатная доставка
            </div>
            <div className="div_orange text2_2">
              Специальная цена
            </div>
          </div>
          <div className="div_text_3">
            <div>
              Нейтрализует
            </div>
            <div className="div_orange">
              вирусы
            </div>
          </div>
        </div>
        <div className="div_button">
          <button className="button">
            Оформить заказ!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
