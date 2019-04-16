// React
import React from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"


// Material-UI
import FormControl     from '@material-ui/core/FormControl'

// APP
import SelectField from './SelectField'
import PlayButton  from './PlayButton';

import store        from '../store'  
import { connect }     from 'react-redux';
import { createMatch } from '../actions/matchActions';
import PropTypes       from 'prop-types';

class MatchForm extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
    this.state = {
      matchSize: 3,
      matchStarts: "human"
    }
  }

  handleClick() {
    this.props.createMatch(
      this.state.matchSize, 
      this.state.matchStarts, 
      this.props.game.id
    ).then(response => {
      this.props.history.push(`/games/${this.props.game.id}/matches/${response.payload.id}.html`);
    })
  }

  handleChange(name, value) {
    this.setState({ [name]: value })
  }

  render() {
    const { game } = this.props;
    return(
      game ? (
      <React.Fragment>
        <FormControl fullWidth={true} required={true} key='size'>
          <SelectField 
            id="matchSize" 
            name="matchSize" 
            label="Size" 
            value={this.state.matchSize} 
            selectOptions={game.settings.sizeOptions} 
            onInputChange={this.handleChange}/>
        </FormControl>
        <FormControl fullWidth={true} required={true} key='starts'>
          <SelectField 
            id="matchStarts" 
            name="matchStarts" 
            label="Starts" 
            value={this.state.matchStarts} 
            selectOptions={game.settings.startsOptions} 
            onInputChange={this.handleChange}/>
        </FormControl>
        <FormControl fullWidth={true} key='play'>
          <PlayButton 
            id="play"
            name="play" 
            label="Play" 
            onSubmit={this.handleClick}>
          </PlayButton>
        </FormControl>
      </React.Fragment> 
      ) : ( <div>Loading</div> )
    );
  }
}
const mapStateToProps = state => ({
  match: state.matches.item,
  game: state.games.item
});

export default connect(mapStateToProps, { createMatch })(withRouter(MatchForm));