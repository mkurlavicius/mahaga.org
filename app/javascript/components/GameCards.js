import React          from 'react';
import Grid           from '@material-ui/core/Grid';
import GameCard       from './GameCard';
import { connect }    from 'react-redux';
import { getGames }   from '../actions/gameActions';
import PropTypes      from 'prop-types'

class GameCards extends React.Component {

  componentDidMount() {
    this.props.getGames();
  }

  render() {
    const { games } = this.props
    console.log(games)
    return(
      <React.Fragment>
        {games ? (games.map((game, index) => ( 
          <Grid item key={`grid-key-${index}`} xs={12} sm={6} sm={6} md={4} lg={3}>
            <GameCard key={game.id} game={game}/>
          </Grid>
        ))) : (
          <div>Loading...</div>
        )}
      </React.Fragment>
    )
  }
}

GameCards.propTypes = {
  gameBase: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
  games:    PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  games: state.games.items
});

export default connect(mapStateToProps, { getGames })(GameCards);

