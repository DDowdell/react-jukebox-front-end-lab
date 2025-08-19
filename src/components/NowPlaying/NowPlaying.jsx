const NowPlaying = ({ track }) => {
  if (!track) {
    return null;
  }

  return (
    <div>
      <h2>Now Playing</h2>
      <h3>{track.title} By {track.artist}</h3>
    </div>
  );
};

export default NowPlaying;