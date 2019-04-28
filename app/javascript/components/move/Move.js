//  // React
// import React from 'react';

// // Material-UI
// import { withStyles } from '@material-ui/core/styles';
// import red            from '@material-ui/core/colors/red';
// import Grid           from '@material-ui/core/Grid'

// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

// class Move extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       expanded: false,
//       move: {
//         id: 0,
//         as_string: "x",
//         number: 1,
//         message: "The move is zero",
//       },
//       matchData: this.props.matchData
//     }
//   }

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   componentDidMount() {
//     const { matchData } = this.state
//     const gameId        = matchData.match.params.gameId
//     const matchId       = matchData.match.params.matchId
//     const moveId        = matchData.match.params.moveId

//     fetch(`http://localhost:3000/games/${gameId}.json`, {mode: 'no-cors'})
//       .then(res  => { return res.json(); })
//       .then(data => {
//         this.setState({ game: data })
//       })
//   }

//   gameCreatedAt() {
//     return Intl.DateTimeFormat('en-GB', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     }).format(new Date(this.state.game.createdAt))
//   }

//   render() {
//     // const { wikipage } = this.props
//     // console.debug(wikipage)
//     const { game, small, mediumLarge } = this.state

//     return(
//       <React.Fragment>
//         <Grid item key={`game-area`} xs={small} sm={small} md={mediumLarge} lg={mediumLarge}>
//         </Grid>
      
//         <Grid item key={`moves`} xs={small} sm={small} md={mediumLarge} lg={mediumLarge}>
//         </Grid>
//       </React.Fragment>
//     );
//   }
// }

// export default withStyles(styles)(Move);