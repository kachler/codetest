import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import BeforeIcon from '@material-ui/icons/NavigateBefore';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function PrevButton(props) {
  const { classes, previousCard } = props;
  return (
    <div>
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <BeforeIcon id='previous' onClick={previousCard} />
      </Fab>
    </div>
  );
}

PrevButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrevButton);
