// React
import React                            from 'react';
import classnames                       from 'classnames';
import { BrowserRouter as Router, Link} from 'react-router-dom'

// Material
import { withStyles } from '@material-ui/core/styles';
import Card           from '@material-ui/core/Card';
import CardHeader     from '@material-ui/core/CardHeader';
import CardMedia      from '@material-ui/core/CardMedia';
import CardContent    from '@material-ui/core/CardContent';
import CardActions    from '@material-ui/core/CardActions';
import Collapse       from '@material-ui/core/Collapse';
import Avatar         from '@material-ui/core/Avatar';
import IconButton     from '@material-ui/core/IconButton';
import Typography     from '@material-ui/core/Typography';
import red            from '@material-ui/core/colors/red';
import FavoriteIcon   from '@material-ui/icons/Favorite';
import ShareIcon      from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon   from '@material-ui/icons/MoreVert';
import PlayArrowIcon  from '@material-ui/icons/PlayArrow';
import Button         from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea'
// App
import { getDate }    from '../Utils';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
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

class GameCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false,
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { game, classes } = this.props

    return(
      <Card className={classes.card}>

        <CardActionArea>
          <Link to={`/games/${game.id}.html`} style={{ textDecoration: 'none' }}> 
            <CardMedia className={classes.media} image={game.picture} title={game.label}/>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2" color="textPrimary">
                {game.label}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {game.description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>

        <CardActions>
          <Link to={`/games/${game.id}.html`} style={{ textDecoration: 'none' }}> 
            <Button variant="contained" size="small" color="primary">
              Play
            </Button>
          </Link>
          <Button 
            size="small" 
            color="primary"
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
            >
            Win Condition
          </Button>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {game.winCondition}
            </Typography>
          </CardContent>
        </Collapse>

      </Card>
    );
  }
}

export default withStyles(styles)(GameCard);

{/* <IconButton className={classnames(classes.expand, {
  [classes.expandOpen]: this.state.expanded,
})}
onClick={this.handleExpandClick}
aria-expanded={this.state.expanded}
aria-label="Show more"><ExpandMoreIcon /></IconButton>
</CardActions> */}

