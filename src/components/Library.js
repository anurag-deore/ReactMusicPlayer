import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <div className="lib-header">
        <FontAwesomeIcon
          onClick={openLibraryHandler}
          className="skip-forward"
          size="sm"
          icon={faTimes}
        />
        <h2>Library</h2>
      </div>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
