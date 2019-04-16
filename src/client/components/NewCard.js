import React from 'react';
import Typography from '@material-ui/core/Typography';
import UploadButton from '../buttons/UploadButton';
import CancelButton from '../buttons/CancelButton';
import SubmitButton from '../buttons/SubmitButton';

const NewCard = (props) => {
  const { newCard, inputChange, cancelModal, submitCard, showWidget } = props;

  return (
    <div style={{ paddingTop: 25, paddingRight: 25, paddingBottom: 25, paddingLeft: 25 }} className='form'>
      <Typography variant="h5" component="h2">Add New Card</Typography>
      <Typography className="title" variant="h6" component="h2">Movie Title</Typography>
      <textarea style={{ resize: 'none' }} rows="4" cols="80" id='title' type='text' value={newCard.title} onChange={inputChange} />
      <Typography className="title" variant="h6" component="h2">Movie Description</Typography>
      <textarea style={{ resize: 'none' }} rows="4" cols="80" id='desc' type='text' value={newCard.desc} onChange={inputChange} />
      <Typography className="title" variant="h6" component="h2">Movie Factoid</Typography>
      <textarea style={{ resize: 'none' }} rows="4" cols="80" id='fact' type='text' value={newCard.fact} onChange={inputChange} />
      <div className="upload-button">
        <UploadButton showWidget={showWidget} />
      </div>
      <div className="cancel-submit-buttons">
        <CancelButton cancelModal={cancelModal} />
        <SubmitButton submitCard={submitCard} />
      </div>

    </div>
  );
}

export default NewCard;
