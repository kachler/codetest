import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function UploadButton(props) {
  const { classes, showWidget } = props;
  return (
    <div>
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" className={classes.button} onClick={showWidget}>
          Upload Poster
        </Button>
      </label>
    </div>
  );
}

UploadButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadButton);
