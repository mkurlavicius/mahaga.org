// React
import React from 'react';
import classNames from 'classnames';

// Material
import Button         from '@material-ui/core/Button';
import Grid           from '@material-ui/core/Grid';
import Typography     from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List           from '@material-ui/core/List';
import ListItem       from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon   from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper          from '@material-ui/core/Paper';
import Card           from '@material-ui/core/Card';
import CheckIcon      from '@material-ui/icons/Check';
import DoneIcon       from '@material-ui/icons/Done';

import BgImage        from '../bg.jpg'

// App
import Loader from './Loader';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroUnit: {
    background: 'rgb(66,80,174)',
    background: 'linear-gradient(180deg, rgba(66,80,174,1) 9%, rgba(255,255,255,1) 93%)',

    // background: 'rgb(0,0,0)',
    // background: 'linear-gradient(45deg, rgba(0,0,0,1) 5%, rgba(209,48,6,1) 37%, rgba(255,252,110,1) 100%)',
    // backgroundColor: theme.palette.background.paper,
    // backgroundImage: `url(${BgImage})`,
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

class HeroArea extends React.Component  {
  render() {
    const { classes, gameBase }  = this.props

    return( 
      (gameBase.id) ? 
      (
        <Paper>
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Typography gutterBottom component="h2" variant="h2" align="center" color="textPrimary">{gameBase.main_name}</Typography>
                <Typography style={{transform: 'rotate(315deg)', marginTop: '-60px', marginBottom: '60px', marginRight: '100px'}} gutterBottom component="h4" variant="h4" align="center" color="secondary">
                  THE LADDER
                  {/* The L<span style={{visibility: 'hidden'}}>a</span>dder */}
                  {/* {gameBase.main_caption} */}
                </Typography>

                {/* <Typography paragraph variant="h6" align="center" color="textSecondary">{gameBase.main_description}</Typography> */}
                <List dense={false}>
                  <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText primary="Collection of classical games like TicTacTao, Sudoku, Chess, Draughts, Solitaire and many more..."/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText primary="Against human or computer opponent(s) with a similar skill."/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText primary="Anonymous by default."/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText primary="From any device."/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><DoneIcon /></ListItemIcon>
                    <ListItemText primary="Free."/>
                  </ListItem>
                </List>

                {/* <Typography paragraph variant="subtitle1" align="left" color="textSecondary">
                  Collection of classical games like TicTacTao, Sudoku, Chess, Draughts, Solitaire and many more...
                </Typography>
                <Typography paragraph variant="subtitle1" align="left" color="textSecondary">
                  Against human or computer opponent(s) with a similar skill. From any device, free.
                </Typography>

                <Typography paragraph variant="subtitle1" align="left" color="textSecondary">
                  Anonymous by default.
                </Typography> */}
                
                {/* {gameBase.main_description} */}
                

                {/* <div className={classes.heroButtons}>
                  <Grid container spacing={16} justify="center">
                    <Grid item><Button variant="contained" color="primary">Main call to action</Button></Grid>
                    <Grid item><Button variant="outlined" color="primary">Secondary action</Button></Grid>
                  </Grid>
                </div> */}
              </div>
            </div>
        </Paper>
      ) : (<Loader/>)
    )
  }
}

export default withStyles(styles)(HeroArea);