// React
import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'

// Material
import { withStyles } from '@material-ui/core/styles';
import Table          from '@material-ui/core/Table';
import TableBody      from '@material-ui/core/TableBody';
import TableCell      from '@material-ui/core/TableCell';
import TableHead      from '@material-ui/core/TableHead';
import TableRow       from '@material-ui/core/TableRow';
import Paper          from '@material-ui/core/Paper';
import FormControl     from '@material-ui/core/FormControl'
import Card           from '@material-ui/core/Card';
import CardHeader     from '@material-ui/core/CardHeader';
import CardContent    from '@material-ui/core/CardContent';
import CardActions    from '@material-ui/core/CardActions';
import classnames     from 'classnames';
import red            from '@material-ui/core/colors/red';
import Avatar         from '@material-ui/core/Avatar';
import IconButton     from '@material-ui/core/IconButton';
import FavoriteIcon   from '@material-ui/icons/Favorite';
import ShareIcon      from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon   from '@material-ui/icons/MoreVert'

// App
import { getDate } from '../Utils'
import Loader      from '../base/Loader'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
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

class Matches extends React.Component {
  
  render() {
    const { classes, matches, game } = this.props;
    return(
      (classes && matches && game) ? 
      (
        <Card className={classes.card}>

        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar}>0</Avatar>}
          // action={<IconButton><MoreVertIcon/></IconButton>}
          title={'All your matches'}
          // title="Shrimp and Chorizo Paella"
          subheader={`Game: ${game.name}`}/>

        <CardContent>
          {
            (matches) ? 
            (
              <Table className={classes.table}>

                <TableHead>
                  <TableRow>
                    <TableCell align="left">Match</TableCell>
                    <TableCell align="right">Updated At</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {matches.map(match => (
                    <TableRow key={match.id}>
                      <TableCell align="left">
                        <Link to={`/games/${game.id}/matches/${match.id}.html`}>
                          {`Match - ${match.id}`}
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        {getDate(match, "updatedAt")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>

            ) : (<Loader/>)
          }
        </CardContent>

        <CardActions className={classes.actions} disableSpacing>
          <IconButton aria-label="Add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="Share"><ShareIcon /></IconButton>
        </CardActions>

      </Card>
      ) : (<Loader/>)
    )
  }
}
export default withStyles(styles)(Matches);


