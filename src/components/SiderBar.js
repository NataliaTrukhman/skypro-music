
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './SiderBar.css'

function SiderBar(props){

//  const test='LOADING...'

    return(
        <div className="main__sidebar sidebar">
       <SiderBarPersonal/>
       <div className="sidebar__block">
      <SiderBarLists/>
       </div>
      </div>
    );
}
export default SiderBar

function SiderBarPersonal(){
    return(
        <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
    )}

    function SiderBarLists(){
      const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
       setTimeout(() => {
         setIsLoading(false)
       }, 5000);
     }, []);
     const test='LOADING...'
       return (
        <div className="sidebar__list">
          {isLoading ?  (<Skeleton className="sidebar__item"/>) : (<Playlist number="./img/playlist01.png"/>)}
          {isLoading ?  (<Skeleton className="sidebar__item"/>) : (<Playlist number="./img/playlist02.png"/>)}
          {isLoading ?  (<Skeleton className="sidebar__item"/>) : (<Playlist number="./img/playlist03.png"/>)}
         
          </div>
        
        )
    }

    function Playlist({number}){
      return(
        <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src={number}
            alt="day's playlist"
          />
        </a>
      </div>
      )
    }