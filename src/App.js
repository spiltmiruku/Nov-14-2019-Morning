// import React from 'react';
// import './App.css';

// import Card from './Components/Card';
// import data from './data';


// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       people: data,
//       i: 0,
//     }
//     }

// handleClick = () => {
//   if(e.target.name === 'next'){
//   this.setState({
//     i: this.state.i + 1
//   })
// }else{
//   this.setState({
//     i: this.state.i = 1
//     })
//   }
// }

//     render(){

//       return (
//         <div className='App'>
//           {/* {this.state.people.map((e) => <Card person={e}/>)} */}
//           {<Card person={this.state.people[this.state.i]} />}
//           <button name='next' onClick={() => this.handleClick}> Next </button>
//           <button name='previous' onClick={() =>this.handleClick}> Previous </button>
//         </div>

//       )

//   }
// }


// export default App;


import React from 'react';
import './App.css';
import Card from './components/Card'
import data from './data'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: data,
      i: 0
    }
  }
  handleClick = (e) => {
    if (e.target.name === 'next') {
      this.setState({
        i: this.state.i + 1
      })
    } else {
      this.setState({
        i: this.state.i - 1
      })
    }
  }
  render() {
    return (
      <div className="App" >
        {<Card person={this.state.people[this.state.i]} />}
        <button name="previous" onClick={this.handleClick}>Previous</button>
        <button name="next" onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
export default App;