const TrackList = (props) => {
  return (
    <div>
      <h1>Track List</h1>
      <div>
        {!props.tracks.length ? (
          <h2>No Tracks Yet!</h2>
        ) : (
          <ul>
            {props.tracks.map((track) => (
              <li key={track._id} style={{ marginBottom: '10px' }}>
                <span style={{ cursor: 'pointer', color: "#f40303ff" }} 
                  onClick={() => props.handleSelect(track)}>
                  {track.title}
                </span>
                <button className="play-button"
                  onClick={() => props.handlePlayButton(track)}
                  style={{ marginLeft: '10px' }}
                  >
                  Play
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="button" onClick={props.handleFormView}>
        {props.isFormOpen ? 'Close Form' : 'Add Track'}
      </button>
    </div>
  );
};

export default TrackList;