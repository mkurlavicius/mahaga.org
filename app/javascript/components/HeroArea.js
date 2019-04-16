// React
import React from 'react';
import classNames from 'classnames';

// Material
import Button         from '@material-ui/core/Button';
import Grid           from '@material-ui/core/Grid';
import Typography     from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import BgImage          from './bg.jpg';

// App

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

class HeroArea extends React.Component  {
  constructor(props){
    super(props)
    this.state = { 
      gameBase: this.props.gameBase
    }
  }

  render() {
    const { classes }  = this.props
    const { gameBase } = this.state

    return(
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography gutterBottom component="h1" variant="h2" align="center" color="textPrimary">{gameBase.main_name}</Typography>
          <Typography gutterBottom component="h6" variant="h6" align="center" color="secondary">{gameBase.main_caption}</Typography>
          <Typography paragraph                   variant="h6" align="center" color="textSecondary">{gameBase.main_description}</Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={16} justify="center">
              <Grid item><Button variant="contained" color="primary">Main call to action</Button></Grid>
              <Grid item><Button variant="outlined" color="primary">Secondary action</Button></Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HeroArea);