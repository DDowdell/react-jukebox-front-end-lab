// import './App.css'
// import React from 'react';
import { useState, useEffect } from 'react';
import * as trackService from './services/trackService.js'
import TrackList from './components/TrackList/TrackList.jsx';
import TrackDetail from './components/TrackDetail/TrackDetail.jsx';
import TrackForm from './components/TrackForm/TrackForm.jsx';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelect = (track) => {
    setSelected(track);
    setIsFormOpen(false);
  };

    const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

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
      <TrackList 
      tracks={tracks} 
      handleSelect={handleSelect}
      handleFormView={handleFormView}
      isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <TrackForm />
      ) : (
        <TrackDetail selected={selected} />
      )}
    </>
  )
};

export default App;
