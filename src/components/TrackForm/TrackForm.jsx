import { useEffect, useState } from 'react';

const TrackForm = ({ handleAddTrack, selected, handleUpdateTrack }) => {
  const [formData, setFormData] = useState({ title: '', artist: '' });

  useEffect(() => {
    if (selected) {
      setFormData({ title: selected.title, artist: selected.artist });
    } else {
      setFormData({ title: '', artist: '' });
    }
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      handleUpdateTrack(formData, selected._id);
    } else {
      handleAddTrack(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selected ? 'Edit Track' : 'Add New Track'}</h2>
      <div className='form-box'>
        <label htmlFor='title'>Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-box'>
        <label htmlFor='title'>Artist: </label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button className="button" 
        type="submit">{selected ? 'Update Track' : 'Add Track'}
        </button>
        </div>
    </form>
  );
};

export default TrackForm;