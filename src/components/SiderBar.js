
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './SiderBarStyles'
// import './SiderBar.css'

//правчасть

function SiderBar(props) {
  return (
    <S.MainSiderbar>
      <SiderBarPersonal />
      <S.SiderBlock>
        <SiderBarLists />
      </S.SiderBlock>
    </S.MainSiderbar>
  );
}
export default SiderBar

function SiderBarPersonal() {
  return (
    <S.SiderPersonal>
      <S.SiderPersonalName>Sergey.Ivanov</S.SiderPersonalName>
      <S.SiderIcon>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SiderIcon>
    </S.SiderPersonal>
  )
}

function SiderBarLists() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.SiderList>
      <S.SiderItem>
        {isLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={250} height={150} />
          </SkeletonTheme>) : (<Playlist number="./img/playlist01.png" />)}
      </S.SiderItem>
      <S.SiderItem>
        {isLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={250} height={150} />
          </SkeletonTheme>) : (<Playlist number="./img/playlist02.png" />)}
      </S.SiderItem>
      <S.SiderItem>
        {isLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton width={250} height={150} />
          </SkeletonTheme>) : (<Playlist number="./img/playlist03.png" />)}
      </S.SiderItem>
    </S.SiderList>

  )
}

function Playlist({ number }) {
  return (

    <S.SiderLink href="#">
      <S.SiderImg
        src={number}
        alt="day's playlist"
      />
    </S.SiderLink>

  )
}