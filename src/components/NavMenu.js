import React from 'react';
import { useState } from 'react';
import * as S from './NavMenuStyles'
// import './NavMenu.css'


const NavMenu = (props) => {
  const [menuBurger,setMenuBurger]= useState(false);
  function menuBurgerClick(){
    setMenuBurger(!menuBurger)
}
    return(
<S.MainNav>
    <S.NavLogo>
        <S.LogoImage src="../img/logo.png" alt="logo" />
    </S.NavLogo>
        {/* BurgerMenu клик по меню*/}
    <S.NavBurger onClick={menuBurgerClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
    </S.NavBurger>
    {/*  тут меняет состоение*/} 
    {
      menuBurger && <MenuBurger />
     }
</S.MainNav>
      );
}
export default NavMenu



function MenuBurger(){
    return(
        <S.NavMenuBurger>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink href="#">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="#">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="../signin.html">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenuBurger>
    )
};