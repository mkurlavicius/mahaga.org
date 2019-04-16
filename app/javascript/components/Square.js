// React
import React        from 'react';

// Material

// Components
import SquareButton from './SquareButton'

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  buttonSize() {
    const { match } = this.props;
    const sizeProperties = {
      3: "large",
      4: "large",
      5: "medium",
      6: "medium",
      7: "small"
    }
    return sizeProperties[match.size];
  }

  render() {
    const { square } = this.props;

    return(
      <SquareButton color="primary" label={square.label} disabled={square.disabled} size={this.buttonSize()} />
    );
  }
}

export default Square;