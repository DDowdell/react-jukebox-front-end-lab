const TrackDetail = (props) => {
  if (!props.selected) {
    return (
      <div>
        <h3>NO DETAILS</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Title: {props.selected.title}</h3>
      <h3>Artist: {props.selected.artist}</h3>
      <h3>Album: {props.selected.album}</h3>
    </div>
  );
};

export default TrackDetail;
