import { useState } from "react";

const TrackForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.title]: evt.target.value });
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist">Artist: </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <label htmlFor="album">Album: </label>
        <input
          id="album"
          name="album"
          value={formData.album}
          onChange={handleChange}
        />
        <button type="submit">Add New Track</button>
      </form>
    </div>
  )
};

export default TrackForm;