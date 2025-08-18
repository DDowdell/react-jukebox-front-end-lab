const NowPlaying = (props) => {
    return (
        <div>
            <h2>Now Playing</h2>
            <h3>{props.selected.title} by {props.selected.artist}</h3>
        </div>
    );
};

export default NowPlaying;