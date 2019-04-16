// React
import React from 'react';

// Material-UI
import Grid           from '@material-ui/core/Grid';

// App
import Matches   from './Matches';
import MatchForm from './MatchForm'; 

import { connect }    from 'react-redux';
import { getMatches } from '../actions/matchActions';

import PropTypes      from 'prop-types'

class Game extends React.Component {

  componentDidMount() {
    this.props.getMatches(this.props.matchData.match.params.gameId);
  }

  render() {
    const { game, matches, matchData, gameBase } = this.props;
    console.log("Renderinam Game.js")
    console.log(game, matches, matchData, gameBase)
    console.log("------------------")

    return(
      <Grid container>
        <Grid item key={`match`} xs={12} sm={12} sm={12} md={6} lg={6}>
          { this.props.game.settings ? (<MatchForm game={this.props.game} gameBase={gameBase} matchData={matchData}/>) : (<div>Loading...</div>) }
        </Grid>

        <Grid item key={`matches`} xs={12} sm={12} sm={12} md={6} lg={6}>
          { this.props.matches ? (<Matches game={game} matchData={matchData} matches={matches} gameBase={gameBase} matchData={matchData}/>) : (<div>Loading...</div>) }
        </Grid>
      </Grid>
    );
  }
}

// Game.propTypes = {
//   matchData:  PropTypes.object,
//   getMatches: PropTypes.func.isRequired,
//   gameBase:   PropTypes.object.isRequired,
//   matches:    PropTypes.array,
//   game:       PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  game: state.games.item,
  matches: state.matches.items
});

export default connect(mapStateToProps, { getMatches })(Game); 