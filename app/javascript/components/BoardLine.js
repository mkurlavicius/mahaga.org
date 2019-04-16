// React
import React from 'react';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import red            from '@material-ui/core/colors/red';
import Grid           from '@material-ui/core/Grid';

// App
import Square    from './Square'

import { getSquareByXY, axis } from './Utils'

class BoardLine extends React.Component {

  constructor(props){
    super(props)
  }
  
  squareComponent(xCoordinate, yCoordinate, match, game, gameBase) {
    const square = getSquareByXY(match.squares, xCoordinate, yCoordinate);
    console.log("Ar gavom taska?")
    console.log(xCoordinate, yCoordinate, match.squares, game, gameBase);
    console.log(square)
    return(square ? (
        <Square key={`square-${xCoordinate}-${yCoordinate}`} square={square} match={match} game={game} gameBase={gameBase} />
    ) : (<div>Loading...</div>) )
  }

  gridSize() {
    const { match } = this.props;
    if(match.size) {
      const gridProperties = {
        3: 2.25,
        4: 2.25,
        5: 2.25,
        6: 2,
      }
      return gridProperties[match.size];
    } else {
      return 2;
    }
  }

  squareItem(x, y, match, game, gameBase) {
    const square = getSquareByXY(match.squares, x, y);
    if(square.x) {
      return(
        <Grid item key={`square-item-${square.id}`} lg={this.gridSize()} sm={this.gridSize()} md={this.gridSize()} xs={this.gridSize()}>
          <Square key={`square-${square.x}-${square.y}`} square={square} match={match} game={game} gameBase={gameBase} />
        </Grid>
      );
    } else {
      return(<div>Loading</div>);
    }
  }

  render() {
    const { horizontal, match, game, gameBase} = this.props;
    const xAxis = axis(match.size).items();
  
    return(
      <Grid container alignItems="center" direction="row" justify="center">
        {xAxis.map((xCoordinate) => ( 
          this.squareItem(xCoordinate, horizontal, match, game, gameBase)
        ))}
      </Grid>
    );
  }
}

export default BoardLine;