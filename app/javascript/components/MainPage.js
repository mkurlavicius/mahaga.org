// React
import React      from 'react';
import classNames from 'classnames';
import axios      from 'axios';

// Material
import CssBaseline    from '@material-ui/core/CssBaseline';
import Grid           from '@material-ui/core/Grid';
import Typography     from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// App
import TopBar    from './TopBar'
import HeroArea  from './HeroArea'
import GameCards from './GameCards'
import Game      from './Game'
import Match     from './Match'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3, [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class MainPage extends React.Component  {
  constructor(props){
    super(props)  
    this.state = { 
      error:     null,
      isLoaded:  false,
      gameBase:  this.props.gameBase,
      showGames: this.props.showGames,
      showHero:  this.props.showHero,
      showGame:  this.props.showGame,
      showMatch: this.props.showMatch,
      gameId:    this.props.gameId,
      matchData: this.props.matchData,
    }
  }

  render() {
    const { classes, gameBase } = this.props
    const { showGames, showHero, showGame, showMatch, matchData, gameId } = this.state;

    return (
      <React.Fragment>
        <CssBaseline/>
        <TopBar/>
        { showHero ? (<HeroArea gameBase={gameBase}/>) : ('') }

          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              { showGames ? (<GameCards  gameBase={this.state.gameBase} matchData={this.state.matchData}                 />) : (<div></div>) }
              { showGame  ? (<Game       gameBase={this.state.gameBase} matchData={this.state.matchData} gameId={gameId} />) : (<div></div>) }
              { showMatch ? (<Match      gameBase={this.state.gameBase} matchData={this.state.matchData}                 />) : (<div></div>) }
            </Grid>
          </div>

      </React.Fragment>
    )
  }
}


export default withStyles(styles)(MainPage);