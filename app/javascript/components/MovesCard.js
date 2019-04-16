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

import PropTypes       from 'prop-types';

import Board from './Board'
import Moves from './Moves'

import { getDate }  from './Utils';

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


class MovesCard extends React.Component {
  constructor(props) {
    super(props)
  }

  movesTitle() {
    const { game, match} = this.props;
    if(game.id && match.id) {
      return `All the moves`
    }
  }

  render() {
    const { classes, game, match, moves, matchData } = this.props;
    if(match.id && game.id && classes) {
      return(
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                Mov
              </Avatar>
            }
            action={
              <IconButton>
              <MoreVertIcon />
              </IconButton>
            }
            title={this.movesTitle()}
            // title="Shrimp and Chorizo Paella"
            subheader={`Started: ${getDate(match, "createdAt")}`}
          />

        <CardContent>
          <Moves moves={moves} match={match} game={game} matchData={matchData}/>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="Share"><ShareIcon /></IconButton>
        </CardActions>
      </Card>
      );
    } else {
      return(
        <div>Loading....</div>
      );
    }
  }
}

export default withStyles(styles)(MovesCard);