import React          from 'react';
import PropTypes      from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab            from '@material-ui/core/Fab';
import AddIcon        from '@material-ui/icons/Add';
import Icon           from '@material-ui/core/Icon';
import DeleteIcon     from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { inherits }   from 'util';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class SquareButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }

  handleSquareClick(event) {
    this.props.handleSquareClick(event.target.value) // Going up to Square
  }

  render() {
    const { classes, value, color, size, label } = this.props;

    return (
      <Fab
        onMouseDown={this.handleSquareClick}
        className={classes.fab} 
        value={value}
        color={color} 
        size={size}>
        {label} 
      </Fab>
    )
  }  
}

export default withStyles(styles)(SquareButton);




//   <Fab color="primary" aria-label="Add" className={classes.fab}>
//     <AddIcon />
//   </Fab>
//   <Fab color="secondary" aria-label="Edit" className={classes.fab}>
//     <Icon>edit_icon</Icon>
//   </Fab>
//   <Fab variant="extended" aria-label="Delete" className={classes.fab}>
//     <NavigationIcon className={classes.extendedIcon} />
//     Extended
//   </Fab>
//   <Fab disabled aria-label="Delete" className={classes.fab}>
//     <DeleteIcon />
//   </Fab>
// </div>