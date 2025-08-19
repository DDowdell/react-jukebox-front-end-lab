const TrackList = ({ tracks, handleSelect, handleFormView, handlePlayButton, handleDeleteTrack }) => {
  return (
    <div>
      <h2>Track List</h2>
      {tracks.length === 0 ? (
        <p>No tracks yet!</p>
      ) : (
        tracks.map((track) => (
          <div key={track._id}>
            <h3>{track.title} - {track.artist}</h3>            
            <div className="button-container">
              <button className="button" onClick={() => handlePlayButton(track)}>Play</button>
              <button className="button" onClick={() => { handleSelect(track); handleFormView(track); }}>Edit</button>
              <button className="button" onClick={() => handleDeleteTrack(track._id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TrackList;