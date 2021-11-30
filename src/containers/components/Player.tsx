import { headerInfo, tracks } from "../../services/api";
import PlaylistItem from "./PlaylistItem";
import PlaylistHeader from "./PlaylistHeader";

const Player = () => {
  return (
    <div className="player-container">
      <PlaylistHeader  {...headerInfo}/>
      {tracks.map(track => (
          <PlaylistItem {...track} key={track.id} />
        ))}
    </div>
  );
};

export default Player;