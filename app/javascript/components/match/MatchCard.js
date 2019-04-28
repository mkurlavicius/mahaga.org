// React
import React from 'react';

// Material
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
import Board        from '../board/Board';
import Loader       from '../base/Loader';
import { getDate }  from '../Utils';

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


class MatchCard extends React.Component {
  constructor(props) {
    super(props)
  }

  matchTitle() {
    const { game, match} = this.props;
    if(game.id && match.id) {
      return `Match (${match.id}) - ${game.label}`
    }
  }

  render() {
    const { classes, matchData, gameBase, game, match, squares } = this.props;
    console.log(matchData)
    return(
      (match.id && game.id && classes) ? 
      ( 
        <Card className={classes.card}>

          <CardHeader
            avatar={<Avatar aria-label="Recipe" className={classes.avatar}>M</Avatar>}
            action={<IconButton><MoreVertIcon/></IconButton>}
            title={this.matchTitle()}
            // title="Shrimp and Chorizo Paella"
            subheader={`Started: ${getDate(match, "createdAt")}`}/>

          <CardContent>
            <Board 
              squares={squares} 
              match={match} 
              game={game} 
              gamebase={gameBase} 
              matchData={matchData}/>
          </CardContent>

          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
            <IconButton aria-label="Share"><ShareIcon /></IconButton>
          </CardActions>

        </Card>
      ) : 
      (<Loader/>)
    )
  }
}

export default withStyles(styles)(MatchCard);