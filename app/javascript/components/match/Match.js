// React
import React                    from 'react';
import { connect }              from 'react-redux';
import { getMoves, createMove } from '../../actions/moveActions';
import { getMatch }             from '../../actions/matchActions';
import PropTypes                from 'prop-types';

// Material
import Grid from '@material-ui/core/Grid';
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

// App
import MovesCard   from '../move/MovesCard'
import Loader      from '../base/Loader';
import { getDate, getSquareByXY } from '../Utils';
import Square      from '../square/Square';


const styles = theme => ({
  card: {
    // maxWidth: 400,
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

class Match extends React.Component {
  constructor(props){
    super(props)
    this.onSquareClick = this.onSquareClick.bind(this);
  }

  gridSize() {
    const { match } = this.props;
    if(match.size) {
      const gridProperties = {
        3: 2.25,
        4: 2.25,
        5: 2.25,
        6: 2.25,
      }
      return gridProperties[match.size];
    } else {
      return 2;
    }
  }

  matchTitle() {
    const { game, match} = this.props;
    if(game.id && match.id) {
      return `Match (${match.id}) - ${game.label}`
    }
  }

  componentDidMount() {
    const gameId  = this.props.matchData.match.params.gameId;
    const matchId = this.props.matchData.match.params.matchId;

    this.props.getMoves(gameId, matchId);1
  }

  onSquareClick(value) {
    const gameId  = this.props.matchData.match.params.gameId;
    const matchId = this.props.matchData.match.params.matchId;
    this.props.createMove(gameId, matchId, ({player: "human", as_string: value})).then(response => {
      this.props.getMoves(gameId, matchId, false).then(response => {
        this.props.getMatch(gameId, matchId, false).then(response => {
          this.forceUpdate();
        });
      });
    });
  }

  render() {
    const { classes, matchData, gameBase, game, match, moves } = this.props;

    console.log("We are rendering match");
    console.log(game, match, moves);

    return(
      (game.id && match.id && moves ) ?
      (
        <Grid container direction="row" justify="center" spacing={40}>
          <Grid item key={'match-card'} xs={12} sm={12} md={6} lg={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={<Avatar aria-label="Recipe" className={classes.avatar}>M</Avatar>}
                action={<IconButton><MoreVertIcon/></IconButton>}
                title={this.matchTitle()}
                // title="Shrimp and Chorizo Paella"
                subheader={`Started: ${getDate(match, "createdAt")}`}/>

              <CardContent>
                {
                  (match.id) ? 
                  (match.yCoordinates.map((yCoordinate) => (
                    <Grid container key={`board-line-${yCoordinate}`} alignItems="center" direction="row" justify="center">
                      {match.xCoordinates.map((xCoordinate) => ( 
                        <Grid item key={`square-item-${xCoordinate}-${yCoordinate}`} lg={this.gridSize()} sm={this.gridSize()} md={this.gridSize()} xs={this.gridSize()}>
                          <Square 
                            key={`square-${xCoordinate}-${yCoordinate}`} 
                            handleSquareClick={this.onSquareClick}

                            x={xCoordinate}
                            y={yCoordinate}
                            match={match} 
                            game={game} 
                            gameBase={gameBase} 
                            matchData={matchData}/>
                        </Grid>
                      ))}
                    </Grid>
                  ))) : 
                  (<Grid container key={'with-loader'} alignItems="center" direction="row" justify="center"><Loader/></Grid>) 
                }  
              </CardContent>

              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
                <IconButton aria-label="Share"><ShareIcon /></IconButton>
              </CardActions>
            </Card>

          </Grid>
          <Grid item key={'moves-card'} xs={12} sm={12} md={6} lg={6}>
            <MovesCard matchData={matchData} gameBase={gameBase} game={game} match={match} moves={moves}/>
          </Grid>
        </Grid>
        ) :
      (<Loader/>)
    );
  }
}

Match.propTypes = {
  createMove: PropTypes.func.isRequired,
  getMoves:   PropTypes.func.isRequired,
  match:      PropTypes.object.isRequired,
  game:       PropTypes.object.isRequired,
  move:       PropTypes.object,
  moves:      PropTypes.array,
}

const mapStateToProps = state => ({
  game:    state.games.item,
  match:   state.matches.item,
  moves:   state.moves.items,
});

export default connect(mapStateToProps, { getMoves, getMatch, createMove })(withStyles(styles)(Match));