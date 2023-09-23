import React from 'react';
import { useState } from 'react';
import './NavMenu.css'


function NavMenu(props){
  const [menuBurger,setMenuBurger]= useState(true);
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
    {/* NavMenuLinks  тут меняет состоение*/} 
    <div className={`nav__menu menu ${menuBurger ? "nav__menu_visibility" : ""}`}>
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
        
 </nav>
    );
}


export default NavMenu




// function NavMenu(props){
//     return(
//         <nav className="main__nav nav">
//         <div className="nav__logo logo">
//           <img className="logo__image" src="../img/logo.png" alt="logo" />
//         </div>
//         <BurgerMenu/>
//         <NavMenuLinks/>
        
//       </nav>
//     );
// }


// function BurgerMenu(){
//   const [menuBurger,setMenuBurger]= useState(false);

//     return(
//         <div className="nav__burger burger">
//         <span className="burger__line"></span>
//         <span className="burger__line"></span>
//         <span className="burger__line"></span>
//       </div>
//     )
// }

// function NavMenuLinks(){
//     return(
//         <div className="nav__menu menu">
//         <ul className="menu__list">
//           <li className="menu__item">
//             <a href="#" className="menu__link">Главное</a>
//           </li>
//           <li className="menu__item">
//             <a href="#" className="menu__link">Мой плейлист</a>
//           </li>
//           <li className="menu__item">
//             <a href="../signin.html" className="menu__link">Войти</a>
//           </li>
//         </ul>
//       </div>
//     )
// }