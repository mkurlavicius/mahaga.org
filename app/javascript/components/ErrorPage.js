// React 
import React from "react"

// Material 
// App 

class ErrorPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  render () {
    const { error } = this.props
    return(
      <div class="error"> 
        {error.message}
      </div>
    )
  }
}

export default ErrorPage