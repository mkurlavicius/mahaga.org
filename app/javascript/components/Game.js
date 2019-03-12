import React          from 'react';
import { withStyles } from '@material-ui/core/styles';
import red            from '@material-ui/core/colors/red';
import Grid           from '@material-ui/core/Grid'
import GameCard       from './GameCard'

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

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      wikiToken: '45abdee7fa53757f67eb592313e8cdfc36d7442',
      expanded: false,
      game: {
        label: "Game Label",
        name: "GameName",
        description: "Lorem ipsum",
        createdAt: "2019-03-02 13:23:51 UTC"
      },
      matchData: this.props.matchData
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    const { matchData } = this.state
    console.log(matchData)

    fetch(`http://localhost:3000/games/${matchData.match.params.gameId}.json`, {mode: 'no-cors'})
      .then(res  => { return res.json(); })
      .then(data => {
        this.setState({ game: data })
      })
  }

  gameCreatedAt() {
    return Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(this.state.game.createdAt))
  }

  render() {
    // const { wikipage } = this.props
    // console.debug(wikipage)
    const { game } = this.state

    return(
      <Grid item key={game} xs={12} sm={12} sm={12} md={12} lg={12}>
        <GameCard key={game.id} game={game}/>
      </Grid>
    );
  }
}

export default withStyles(styles)(Game);