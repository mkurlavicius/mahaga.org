import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SelectField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label:         this.props.label,
      name:          this.props.name,
      value:         this.props.value,
      selectOptions: this.props.selectOptions,
      labelWidth: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.props.onInputChange(event.target.name, event.target.value);
  };

  render() {
    const { classes, value  } = this.props;
    const { name, label, selectOptions } = this.state;

    return(
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={ref => { this.InputLabelRef = ref }} htmlFor={name}>{label}</InputLabel>
        <Select native value={value} onChange={this.handleChange} input={<OutlinedInput name={name} labelWidth={this.state.labelWidth} id={name}/>}>
          { selectOptions ? (selectOptions.map((selectOption, index) => ( 
            <option id={`${selectOption[0]}-${index}`} value={selectOption[0]} key={`key-${index}`}>
              {selectOption[1]}
            </option>
          ))) : (
            <option value={0}>Loading...</option>
          )}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectField);