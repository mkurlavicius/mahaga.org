import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { FormControlLabel } from '@material-ui/core';

const styles = theme => ({
  button:    { margin:      theme.spacing(1) },
  leftIcon:  { marginRight: theme.spacing(1) },
  rightIcon: { marginLeft:  theme.spacing(1) },
  iconSmall: { fontSize: 20 }
});

class PlayButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: this.props.label,
      clicked: false,
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(event) {
    this.props.onSubmit(event.target.name, event.target.value)
    this.setState({ clicked: true });
  };

  render() {
    const { classes, label } = this.props;
    return(
      <Button 
        name="play" 
        variant="contained" 
        color="primary" 
        size="large" 
        className={classes.button} 
        onClick={this.handleOnClick}>
          {label}<PlayArrowIcon className={classes.rightIcon}/>
      </Button>
    )
  }
}

export default withStyles(styles)(PlayButton);