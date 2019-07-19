// React
import React      from 'react';
import classNames from 'classnames';
import axios      from 'axios';

// Material
import CssBaseline    from '@material-ui/core/CssBaseline';
import Grid           from '@material-ui/core/Grid';
import Typography     from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link           from '@material-ui/core/Link';

// App
import TopBar    from './TopBar'
import HeroArea  from './HeroArea'
import Loader    from '../base/Loader'
import Games     from '../game/Games'
import Game      from '../game/Game'
import Match     from '../match/Match'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3), [theme.breakpoints.up(1100 + theme.spacing(6))]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing(8)}px 0`,
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
    // background: 'rgb(66,80,174)',
    // background: 'linear-gradient(0deg, rgba(66,80,174,1) 0%, rgba(255,255,255,1) 43%)',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

class MainPage extends React.Component  {

  render() {
    const { classes, gameBase, showGames, showHero, showGame, showMatch, matchData } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <TopBar gameBase={gameBase}/>

        { showHero ? (<HeroArea gameBase={gameBase}/>) : (<React.Fragment/>) }
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={10}>
              {((showGames) ? (<Games gameBase={gameBase} matchData={matchData}/>) : 
               ((showGame)  ? (<Game  gameBase={gameBase} matchData={matchData}/>) : 
               ((showMatch) ? (<Match gameBase={gameBase} matchData={matchData}/>) : (<Loader/>))))}
            </Grid>
          </div>

          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Created By -
              <Link href='mailto:mkurlavicius@gmail.com'>
                Mindaugas Kurlavičius
              </Link>
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose!
            </Typography>
          </footer>
      </React.Fragment>
    )
  }
}


export default withStyles(styles)(MainPage);