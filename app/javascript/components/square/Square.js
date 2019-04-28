// React
import React                    from 'react';

// Material

// App
import SquareButton      from '../view/SquareButton'
import { getSquareByXY } from '../Utils'

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.handleSquareClick = this.handleSquareClick.bind(this);
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

  squareColor(square) {
    if(square) {
      switch(square.status) {
        case 'nobody':
          return 'default'
        case 'human':
          return 'primary'
        case 'computer':
          return 'secondary'
        default:
          console.log("Square color does not work");
      }
    } else {
      return 'default';
    }
  }

  handleSquareClick(value) {
    this.props.handleSquareClick(value); // Going Up To Match
  }

  render() {
    const { x, y, match, game, gameBase, matchData } = this.props;
    const square = getSquareByXY(match.squares, x, y);

    return(
      <SquareButton 
        color={this.squareColor(square)} 
        label={square.label}
        size={this.buttonSize()}
        value={square.toMove}
        handleSquareClick={this.handleSquareClick}
      />
    );
  }
}

export default Square; 