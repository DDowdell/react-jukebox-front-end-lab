import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js'
import TrackList from './components/TrackList/TrackList.jsx';
import TrackDetail from './components/TrackDetail/TrackDetail.jsx';
import TrackForm from './components/TrackForm/TrackForm';
// import NowPlaying from './components/NowPlaying/NowPlaying.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelect = (track) => {
    setSelected(track);
    setIsFormOpen(false);
  };

  const handleFormView = (track) => {
    if (!track._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData);

      if (newTrack.err) {
        throw new Error(newTrack.err);
      }
      setTracks([newTrack, ...tracks]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.update(formData, trackId);

      if (updatedTrack.err) {
        throw new Error(updatedTrack.err);
      }
      const updatedTrackList = tracks.map((track) => (
        track._id !== updatedTrack._id ? track : updatedTrack
      ));
      setTracks(updatedTrackList);
      setSelected(updatedTrack);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId);

      if (deletedTrack.err) {
        throw new Error(deletedTrack.err);
      }
      setTracks(tracks.filter((track) => track._id !== deletedTrack._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlayButton = (track) => {
    setSelected(track);
    setIsFormOpen(false);
  }

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.index();
        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        }
        setTracks(fetchedTracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTracks();
  }, []);

  return (
    <>
    <div>
      <TrackList
        tracks={tracks}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
        handlePlayButton={handlePlayButton}
        />
      {isFormOpen ? (
        <TrackForm
        selected={selected}
        handleAddTrack={handleAddTrack}
        handleUpdateTrack={handleUpdateTrack}
        />
      ) : (
        <TrackDetail
        selected={selected}
        handleFormView={handleFormView}
        handleDeleteTrack={handleDeleteTrack}
        />
      )}
      </div>
    </>
  )
};

export default App;
