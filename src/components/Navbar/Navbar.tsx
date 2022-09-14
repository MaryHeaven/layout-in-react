import React, { FC, useState } from "react";
import './Navbar.css';
import logo from './img/logo.png';
import basket from './img/basket.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const classNav = nav ? 'menu active' : 'menu';
  
  return (
    <nav className="nav">
      <ul className={classNav}>
        <li><a href="/" className="logo"><img src={logo} alt="logo" /></a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">Оплата и доставка</a></li>
        <li><a href="/">Возврат</a></li>
        <li><a href="/">Исследования</a></li>
        <li><a href="/">Личный кабинет</a></li>
        <li><a href="/">8 8 (800) 600-09-90</a></li>
        <li><a href="/">
          <div className="icon_basket">
            <img src={basket} alt="basket" className="basket" />
            <div className="cicle">
              1
            </div>
          </div>
        </a></li>
      </ul>
      <div onClick={() => setNav(!nav)} className='mobile_btn'>
        {nav ? <AiOutlineClose size={25} style={{color: 'white'}} /> : <AiOutlineMenu size={25} style={{color: 'white'}} />}
      </div>
    </nav>
  );
};

export default Navbar;
