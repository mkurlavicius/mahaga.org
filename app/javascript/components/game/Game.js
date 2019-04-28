// React
import React          from 'react';
import PropTypes      from 'prop-types'
import store          from '../../store'
import { connect }    from 'react-redux';
import { getMatches } from '../../actions/matchActions';
import { getGame }    from '../../actions/gameActions';

// Material-UI
import Grid from '@material-ui/core/Grid';

// App
import Matches   from '../match/Matches';
import MatchForm from '../match/MatchForm'; 
import Loader    from '../base/Loader';

class Game extends React.Component {

  componentDidMount() {
    const gameId = this.props.matchData.match.params.gameId;

    store.dispatch(getMatches(gameId)).then(
    store.dispatch(getGame(gameId)));
  }

  render() {
    const { game, matches, matchData, gameBase } = this.props;

    return(
      <Grid container direction="row" justify="center" spacing={40}>
        <Grid item key={`match`} xs={12} sm={12} md={6} lg={6}>
          { 
            (game.settings) ? 
            (<MatchForm game={game} gameBase={gameBase} matchData={matchData}/>) : 
            (<Loader/>) 
          }
        </Grid>

        <Grid item key={`matches`} xs={12} sm={12} md={6} lg={6}>
          { 
            (matches) ? 
            (<Matches matches={matches} game={game} gameBase={gameBase} matchData={matchData}/>) : 
            (<Loader/>) 
          }
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  game:    state.games.item,
  matches: state.matches.items
});

export default connect(mapStateToProps, { getMatches, getGame })(Game); 