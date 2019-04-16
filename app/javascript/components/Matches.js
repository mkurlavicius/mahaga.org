import React          from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames     from 'classnames';
import red            from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
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

  constructor(props){
    super(props)
    this.state = {
      expanded: false,
      matches: [],
      matchData: this.props.matchData
    }
  }

  render() {
    const { matches, game, small, mediumLarge, classes } = this.state

    return(
      <React.Fragment>
        Laba diena
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Matches);