// React
import React from 'react';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import red            from '@material-ui/core/colors/red';
import Grid           from '@material-ui/core/Grid';

// App
import Loader             from '../base/Loader'
import Square             from '../square/Square'
import { getSquareByXY  } from '../Utils'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Board extends React.Component {



  render() {
    const { gameBase, game, match, squares, matchData } = this.props
    return(
      (match) ? 
      (match.yCoordinates.map((yCoordinate) => (
        <Grid container key={`board-line-${yCoordinate}`} alignItems="center" direction="row" justify="center">
          {match.xCoordinates.map((xCoordinate) => ( 
            this.squareItem(xCoordinate, yCoordinate, squares, match, game, gameBase, matchData)
          ))}
        </Grid>
      ))) : 
      (<Grid container key={'with-loader'} alignItems="center" direction="row" justify="center">
        <Loader/>        
      </Grid>)    
    );
  }
}


export default withStyles(styles)(Board);