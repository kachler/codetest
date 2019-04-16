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

function CancelButton(props) {
  const { classes, cancelModal } = props;
  return (
    <div>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button} onClick={cancelModal}>
          Cancel
        </Button>
      </label>
    </div>
  );
}

CancelButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CancelButton);
