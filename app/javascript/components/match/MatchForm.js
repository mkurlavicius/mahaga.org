// React
import React from 'react'
import { withRouter } from "react-router-dom"
import store        from '../../store'  
import { connect }     from 'react-redux';
import { createMatch } from '../../actions/matchActions';


// Material-UI
import FormControl     from '@material-ui/core/FormControl'
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

// APP
import SelectField from '../view/SelectField'
import PlayButton  from '../PlayButton';
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

class MatchForm extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
    this.state = {
      matchSize: 3,
      matchStarts: "human"
    }
  }

  handleClick() {
    const { game }  = this.props;
    const { matchSize, matchStarts } = this.state

    this.props.createMatch(game.id, { size: matchSize, starts: matchStarts }).then(response => {
        this.props.history.push(`/games/${game.id}/matches/${response.payload.id}.html`);
      } 
    )
  }

  handleChange(name, value) {
    this.setState({ [name]: value })
  }

  render() {
    const { game, classes } = this.props;
    return(
      (game) ? 
      (
        <Card className={classes.card}>

        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar}>P</Avatar>}
          action={<IconButton><MoreVertIcon/></IconButton>}
          title={'Play a new game'}
          // title="Shrimp and Chorizo Paella"
          subheader={`Started: ${getDate(game, "createdAt")}`}/>

        <CardContent>
          <FormControl fullWidth={true} required={true} key='size'>
            <SelectField 
              id="matchSize" 
              name="matchSize" 
              label="What is the size?" 
              value={this.state.matchSize} 
              selectOptions={game.settings.sizeOptions} 
              onInputChange={this.handleChange}/>
          </FormControl>

          <FormControl fullWidth={true} required={true} key='starts'>
            <SelectField 
              id="matchStarts" 
              name="matchStarts" 
              label="Who starts the game?" 
              value={this.state.matchStarts} 
              selectOptions={game.settings.startsOptions} 
              onInputChange={this.handleChange}/>
          </FormControl>

          <FormControl fullWidth={true} key='play'>
            <PlayButton 
              id="play"
              name="play" 
              label="Play" 
              onSubmit={this.handleClick}>
            </PlayButton>
          </FormControl>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="Share"><ShareIcon /></IconButton>
        </CardActions>

      </Card>
      ) : 
      ( <div>Loading</div> )
    );
  }
}
const mapStateToProps = state => ({
  match: state.matches.item,
  game: state.games.item
});

export default connect(mapStateToProps, { createMatch })(withRouter(withStyles(styles)(MatchForm)));