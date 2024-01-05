import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TrackListStyles'
import './TrackList.css'
import FilterBlocks from "./TrackListFilterBlocks";

//центр

function TrackList() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <S.MainCenterblock>
      <S.MainCenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="./img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchTextInput type="search" placeholder="Поиск" name="search" />
      </S.MainCenterblockSearch>
      <S.CenterblockHeading>Треки</S.CenterblockHeading>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <FilterBlocks />
      </S.CenterblockFilter>
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>
          <S.PlaylistAuthor>ИСПОЛНИТЕЛЬ</S.PlaylistAuthor>
          <S.PlaylistAlbum>АЛЬБОМ</S.PlaylistAlbum>
          <S.PlaylistTitleTime>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleTime>
        </S.ContentTitle>
        <S.ContentPlaylist>
          <Track isLoading={isLoading} name={"Guilt"} />
          <Track isLoading={isLoading} name={"Knives n Cherries"} />
          <Track isLoading={isLoading} name={"Knives n Cherries"} />
          <Track isLoading={isLoading} name={"Knives n Cherries"} />

          {isLoading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div className="playlist__item">
                <div className="playlist__track track">
                  <Skeleton className="track__title-image" />
                  <Skeleton className="track__title-image" width={370} height={10} />
                  <Skeleton className="track__title-image" width={310} height={10} />
                  <Skeleton className="track__title-image" width={235} height={10} />
                  <Skeleton className="track__title-image" width={50} height={10} />
                </div>
              </div>
            </SkeletonTheme>
          ) : (
            <Track name={"Knives n Cherries"} />)}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default TrackList;



function Track({ isLoading, name }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? (<Skeleton width={51} height={51} />
              ) : (<svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </svg>
              )}
            </div>
            <div className="track__title-text">
              {isLoading ? (<Skeleton width={375} height={30} />
              ) : (<a className="track__title-link" href="#"
              >{name}
                <span className="track__title-span"></span>
              </a>
              )}
            </div>
          </div>
          <div className="track__author">
            {isLoading ? (<Skeleton width={316} height={30} />
            ) : (<a className="track__author-link" href="#">minthaze</a>
            )}
          </div>
          <div className="track__album">
            {isLoading ? (<Skeleton width={316} height={30} />
            ) : (<a className="track__album-link" href="#"
            >Captivating</a>
            )}

          </div>
          <div className="track__time">
          {isLoading ? (<Skeleton width={20} height={30} />
            ) : ( <><svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            <span className="track__time-text">1:48</span>
          </svg>
          </>)}
          
         
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}



