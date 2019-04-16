import React from 'react';


import Grid           from '@material-ui/core/Grid';
import Card           from '@material-ui/core/Card';
import CardHeader     from '@material-ui/core/CardHeader';
import CardContent    from '@material-ui/core/CardContent';
import CardActions    from '@material-ui/core/CardActions';
import classnames     from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red            from '@material-ui/core/colors/red';
import Avatar         from '@material-ui/core/Avatar';
import IconButton     from '@material-ui/core/IconButton';
import FavoriteIcon   from '@material-ui/icons/Favorite';
import ShareIcon      from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon   from '@material-ui/icons/MoreVert'


import { connect }     from 'react-redux';
import { getMoves }    from '../actions/moveActions';
import PropTypes       from 'prop-types';

import Board     from './Board'
import MatchCard from './MatchCard'
import MovesCard from './MovesCard'

import { getDate }  from './Utils';

class Match extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getMoves(
      this.props.matchData.match.params.gameId,
      this.props.matchData.match.params.matchId 
    )
  }

  render() {
    const { game, match, moves, gameBase } = this.props;
    return(
      (game && match && moves) ?
      (
        <Grid container align="center">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MatchCard gameBase={gameBase} game={game} match={match} moves={moves}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MovesCard gameBase={gameBase} game={game} match={match} moves={moves}/>
          </Grid>
        </Grid>
        ) :
      (<div>Loading...</div>)
    );
  }
}

Match.propTypes = {
  getMoves:   PropTypes.func.isRequired,
  match:      PropTypes.object.isRequired,
  game:       PropTypes.object.isRequired,
  moves:      PropTypes.array
}

const mapStateToProps = state => ({
  game:  state.games.item,
  match: state.matches.item,
  moves: state.moves.items
});

export default connect(mapStateToProps, { getMoves })(Match);