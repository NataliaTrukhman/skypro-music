import React from 'react';
import { useState } from 'react';
import './NavMenu.css'


function NavMenu(props){
  const [menuBurger,setMenuBurger]= useState(false);
  function menuBurgerClick(){
    setMenuBurger(!menuBurger)
}
    return(
<nav className="main__nav nav">
    <div className="nav__logo logo">
        <img className="logo__image" src="../img/logo.png" alt="logo" />
    </div>
        {/* BurgerMenu клик по меню*/}
    <div className="nav__burger burger"  onClick={menuBurgerClick}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
    </div>
    {/*  тут меняет состоение*/} 
    {
      menuBurger && <MenuBurger />
     }
</nav>
      );
}
export default NavMenu



function MenuBurger(){
    return(
        <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">Главное</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">Мой плейлист</a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className="menu__link">Войти</a>
          </li>
        </ul>
      </div>
    )
}