
// React
import React from 'react';
import classNames from 'classnames';

// Material
// import AppBar         from '@material-ui/core/AppBar';
// import Button         from '@material-ui/core/Button';
// import CameraIcon     from '@material-ui/icons/PhotoCamera';
// import Card           from '@material-ui/core/Card';
// import CardActions    from '@material-ui/core/CardActions';
// import CardContent    from '@material-ui/core/CardContent';
// import CardMedia      from '@material-ui/core/CardMedia';
// import Toolbar        from '@material-ui/core/Toolbar';

import CssBaseline    from '@material-ui/core/CssBaseline';
import Grid           from '@material-ui/core/Grid';
import Typography     from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// App
import TopBar       from './TopBar'
import GameCards    from './GameCards'
import HeroArea     from './HeroArea'
import Game         from './Game'
import LoadingPage  from './LoadingPage'
import ErrorPage    from './ErrorPage'
import Checkup from './Checkup';

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
      gameId:    this.props.gameId,
      matchData: this.props.matchData,
    }
  }

  render() {
    const { classes } = this.props;
    const { gameBase, showGames, showHero, showGame, matchData } = this.state;

    return (
      <React.Fragment>
        <CssBaseline/>
        <TopBar/>

        <main>
        { showHero ? (<HeroArea gameBase={gameBase}/>) : ('') }

          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
              { showGames ? (<GameCards gameBase={gameBase}/>) : (<div></div>) }
              { showGame  ? (<Game matchData={matchData}/>)    : (<div></div>) }
            </Grid>
          </div>

        </main>

        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>

      </React.Fragment>
    )
  }
}


export default withStyles(styles)(MainPage);