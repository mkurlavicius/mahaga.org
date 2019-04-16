import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MovesCard from './MovesCard';
import { getDate } from './Utils'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Moves extends React.Component {
  
  render() {
    const { classes, moves } = this.props;
    if(classes && moves) {
      return(
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align="right">Move</TableCell>
                <TableCell align="right">Player</TableCell>
                <TableCell align="right">Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moves.map(move => (
                <TableRow key={move.id}>
                  <TableCell component="th" scope="row">{move.number}</TableCell>
                  <TableCell align="right">{move.message}</TableCell>
                  <TableCell align="right">{move.player}</TableCell>
                  <TableCell align="right">{getDate(move, "createdAt")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      )
    } else {
      return(<div>Loading...</div>)
    }
;
  }
}
export default withStyles(styles)(Moves);


