import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 600,
    minHeight: 600,
    maxWidth: 600,
    maxHeight: 600
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
};

function CardView(props) {
  const { classes, currentCard } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className="movie-info">
          <Typography variant="h6" component="h2"> {currentCard.title} </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">{currentCard.desc}</Typography>
          <Typography className={classes.pos} color="textSecondary">{currentCard.fact}</Typography>
          <br />
        </div>
        <div className="poster">
          <img className="poster-image" src={currentCard.url} alt="Star Wars" />
        </div>
      </CardContent>
    </Card>
  );
}

CardView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardView);