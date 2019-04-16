// React
import React from 'react';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import red            from '@material-ui/core/colors/red';
import Grid           from '@material-ui/core/Grid';

// App
import Matches   from './Matches'
import MatchForm from './MatchForm' 
import Square    from './Square'
import Moves     from './Moves'
import BoardLine from './BoardLine'

import { axis  } from './Utils'

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
    const { game, match, gameBase, matchData } = this.props
    const yCoordinates = axis(match.size).reversed();

    return((this.props.match) ? 
      (yCoordinates.map((yCoordinate, index) => (
        <BoardLine key={`board-line-${index}`} match={match} game={game} gameBase={gameBase} matchData={matchData} horizontal={yCoordinate}/>
      ))) : 
      (<div>Loading...</div>)    
    );
  }
}


export default withStyles(styles)(Board);