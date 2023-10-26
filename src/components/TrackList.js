import React, { useEffect, useState } from "react";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './SiderBar.css'
import './TrackList.css'
import FilterBlocks from "./FilterBlocks";

function TrackList() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="./img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <FilterBlocks />
      </div>

      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
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
        </div>
      </div>
    </div>
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
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className="track__time-text">1:48</span>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}



{/* ошибка не читает свойство text */ }
{/* <Track tracks = {{
            text: 'Knives n Cherries',
            author: 'minthaze',
            album: 'Captivating',
            time: '1:48'
          }}/> */}

{/* function Track({tracks}){
  return (
    <div className="playlist__item">
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image">
          <svg className="track__title-svg" alt="music">
            <use xlinkHref="../img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className="track__title-text">
          <a className="track__title-link" href="#">{tracks.text}
          <span className="track__title-span"></span
          ></a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="#">{tracks.author}</a>
      </div>
      <div className="track__album">
        <a className="track__album-link" href="#"
          >{tracks.album}</a
        >
      </div>
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="../img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className="track__time-text">{tracks.time}</span>
      </div>
    </div>
  </div>
  )
}
  */}
