import {
  ArrowsInSimple,
  ArrowsOutSimple,
  FastForward,
  Play,
  Rewind,
} from "@phosphor-icons/react";

import AlbumImage from "../../assets/img/album.png";
import { useScreenStore } from "../../store/useScreenStore";
import "./styles.sass";

export const MusicPlayer = () => {
  const playerScreenState = useScreenStore((state) => state.playerType);
  const switchPlayerScreenType = useScreenStore(
    (state) => state.switchPlayerType
  );
  const btnState = useScreenStore((state) => state.maximizeIsActive);
  const switchBtnType = useScreenStore((state) => state.switchBtnType);

  return (
    <div className={"player " + playerScreenState}>
      <section className="album__info">
        <img src={AlbumImage} alt="Capa do album" />
        <div>
          <h3>Acorda Devinho</h3>
          <p>Banda Rocketseat</p>
        </div>
      </section>
      <section className="player__controll">
        <div className="buttons__container">
          <button>
            <Rewind weight="fill" color="white" />
          </button>
          <button>
            <Play weight="fill" color="white" />
          </button>
          <button>
            <FastForward weight="fill" color="white" />
          </button>
        </div>
        <div className="time-bar">
          <div className="state-bar"></div>
        </div>
        <div className="time__container">
          <p>1:30</p>
          <p>3:34</p>
        </div>
      </section>
      <button
        className="mode__control__btn"
        onClick={(event) => {
          event.preventDefault();
          switchPlayerScreenType();
          switchBtnType();
        }}
      >
        {btnState ? (
          <ArrowsOutSimple weight="fill" />
        ) : (
          <ArrowsInSimple weight="fill" />
        )}
      </button>
    </div>
  );
};
