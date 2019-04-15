import React from 'react';
import Upload from '../containers/Upload'

const NewCard = (props) => {
  const { newCard, inputChange, cancelModal, submitCard } = props;
  return (
    <div className='form'>
      <Upload />
      <h3>Movie Photo</h3>
      <input id='url' type='text' value={newCard.url} onChange={inputChange} />
      <h3>Movie Title</h3>
      <input id='title' type='text' value={newCard.title} onChange={inputChange} />
      <h3>Movie Description</h3>
      <input id='desc' type='text' value={newCard.desc} onChange={inputChange} />
      <h3>Movie Factoid</h3>
      <input id='fact' type='text' value={newCard.fact} onChange={inputChange} />
      <button id='submit' onClick={submitCard} >Submit</button>
      <button id='cancel' onClick={cancelModal} >Cancel</button>
    </div>
  );
}

export default NewCard;
