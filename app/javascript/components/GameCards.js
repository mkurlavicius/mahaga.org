import React          from 'react';
import Grid           from '@material-ui/core/Grid';
import GameCard       from './GameCard'

class GameCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      gameBase: this.props.gameBase
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/games.json', {mode: 'no-cors'})
      .then(res  => { return res.json(); })
      .then(data => {
        this.setState({ games: data })
      })
  }

  render() {
    const { games } = this.state
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

export default GameCards;

