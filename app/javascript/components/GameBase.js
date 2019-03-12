// React 
import React                       from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Material 
// App 
import MainPage from './MainPage'

class GameBase extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <Router>
        <Route path="/"                   render={(matchData) => <MainPage matchData={matchData} showHero={true}  showGames={true}  showGame={false} gameBase={this.props.gameBase}/> } exact={true} />
        <Route path="/games/:gameId.html" render={(matchData) => <MainPage matchData={matchData} showHero={false} showGames={false} showGame={true}  gameBase={this.props.gameBase}/> } />
      </Router>
    )
  }
}

export default GameBase