// React
import React          from 'react';
import PropTypes      from 'prop-types'
import store          from '../../store'
import { getGames }   from '../../actions/gameActions';
import { connect }    from 'react-redux';

// Material
import Grid from '@material-ui/core/Grid';

// App
import GameCard from '../game/GameCard';
import Loader   from '../base/Loader'

class Games extends React.Component {

  componentDidMount() {
    store.dispatch(getGames());
  }

  render() {
    const { games } = this.props
    return(
      <React.Fragment>
        {games ? (games.map((game, index) => ( 
          <Grid item key={`grid-key-${index}`} xs={12} sm={6} sm={6} md={4} lg={3}>
            <GameCard key={game.id} game={game}/>
          </Grid>
        ))) : (<Loader/>)
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  games: state.games.items
});

export default connect(mapStateToProps, { getGames })(Games);

