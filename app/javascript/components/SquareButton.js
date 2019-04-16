import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // isDisabled() {
  //   if(this.state.disabled) {
  //     return 'disabled'
  //   }
  // }

  handleOnClick(event) {
    this.props.onClick(event.target.name, event.target.value)
    console.log("asdknhswugdfhubg")
    this.setState({ clicked: true });
  };

  render() {
    const { classes, color, disabled, size, label } = this.props;

    return (
      <Fab color={color} className={classes.fab} onClick={this.handleOnClick} size={size}>
        {label} 
      </Fab>
    )
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
  }  
}

export default withStyles(styles)(SquareButton);