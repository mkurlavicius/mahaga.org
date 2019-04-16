import axios from 'axios'

export const getDate = (object, field) => {
  if(object) {
    if(object[field]) {
      return Intl.DateTimeFormat('en-GB', {
        year:  'numeric',
        month: 'long',
        day:   'numeric'
      }).format(new Date(object[field]))
    } else {
      console.log("No date provided in getDate function")
    }
  }
} 

export const getSquareByXY = function(squares, xCoordinate, yCoordinate) {
  if(squares) {
    return squares.find(function(square) { 
      return (
        (square.x == xCoordinate) && 
        (square.y == yCoordinate)
      )
    });
  }
  return null;
}

export const axis = function(size) {
  return {
    items: (function() {
      return [...Array(size).keys()].map((item) => { return item + 1; });
    }),
    reversed: (function() {
      return this.items().reverse(); 
    })
  };
}
