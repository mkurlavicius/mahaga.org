// React 
import React from "react"

// Material 
// App 
import LoadingPage from './LoadingPage'

class Checkup extends React.Component {
  state = { condition: null, outcome: null }

  constructor(props) {
    super(props)
  }

  render() {
    const { condition, outcome } = this.props;
  
    if(!condition) {
      return(
        <LoadingPage>
        </LoadingPage>
      )
    } else {
      return (
        {outcome}
      )
    }
  }
}

export default Checkup;

