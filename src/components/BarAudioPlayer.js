import React, { useEffect, useState } from "react";
import * as S from './BarAudioPlayerStyles.js';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
// import './BarAudioPlayer.css';


// низ

function BarAudioPlayer() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerButtonPrev>
                <S.PlayerButtonPrevSvg alt="prev">
                  <use xlinkHref="./img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerButtonPrevSvg>
              </S.PlayerButtonPrev>
              <S.PlayerButtonPlay className="_btn">
                <S.PlayerButtonPlaySvg alt="play">
                  <use xlinkHref="./img/icon/sprite.svg#icon-play"></use>
                </S.PlayerButtonPlaySvg>
              </S.PlayerButtonPlay>
              <S.PlayerButtonNext>
                <S.PlayerButtonNextSvg alt="next">
                  <use xlinkHref="./img/icon/sprite.svg#icon-next"></use>
                </S.PlayerButtonNextSvg>
              </S.PlayerButtonNext>
              <S.PlayerButtonRepeat className="_btn-icon">
                <S.PlayerButtonRepeatSvg alt="repeat">
                  <use xlinkHref="./img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerButtonRepeatSvg>
              </S.PlayerButtonRepeat>
              <S.PlayerButtonShuffle className="_btn-icon">
                <S.PlayerButtonShuffleSvg alt="shuffle">
                  <use xlinkHref="./img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerButtonShuffleSvg>
              </S.PlayerButtonShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>

              <BarContainLoad isLoading={isLoading} />

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="./img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDisLike className="_btn-icon">
                  <S.TrackPlayDisLikeSvg alt="dislike">
                    <use xlinkHref="./img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisLikeSvg>
                </S.TrackPlayDisLike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="./img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>

  )

}

export default BarAudioPlayer

function BarContainLoad({ isLoading }) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          {isLoading ? (<Skeleton width={50} height={50} />
          ) : (<S.TrackPlaySvg alt="music">
            <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
          )}
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          {isLoading ? (<Skeleton width={59} height={15} />
          ) : (
            <S.TrackPlayAuthorLink href="#"
            >Ты та...
            </S.TrackPlayAuthorLink>)}
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          {isLoading ? (<Skeleton width={59} height={15} />
          ) : (
            <S.TrackPlayAlbumLink href="#">Баста</S.TrackPlayAlbumLink>)}
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
    </SkeletonTheme>
  )
}