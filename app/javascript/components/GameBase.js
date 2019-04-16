// React 
import React                              from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider }                       from "react-redux"
import { createStore, applyMiddleware }   from "redux"

// Material 
// App 
import MainPage     from './MainPage'
import { loadCSS }  from 'fg-loadcss'
import store        from '../store';


class GameBase extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css', document.querySelector('#insertion-point-jss'));
  }

  render () {
    return(
      <Provider store={store}>
        <Router>
          <Route path="/games/:gameId/matches/:matchId.html" render={(matchData) => <MainPage matchData={matchData} showHero={false} showGames={false} showGame={false} showMatch={true}  gameBase={this.props.gameBase}/> } />
          <Route path="/games/:gameId.html"                  render={(matchData) => <MainPage matchData={matchData} showHero={false} showGames={false} showGame={true}  showMatch={false} gameBase={this.props.gameBase}/> } />
          <Route path="/"                                    render={(matchData) => <MainPage matchData={matchData} showHero={true}  showGames={true}  showGame={false} showMatch={false} gameBase={this.props.gameBase}/> } exact={true}/>
        </Router>
      </Provider>
    )
  }
}

export default GameBase