// import React, { Component } from 'react'

// export default class Card extends Component {
//     constructor(props){
//         super(props);

//         this.state ={

//         }
//     }

//     render(){

//       let person = this.props.person
//         console.log(this.people)
//         return(
//           <div className='card-wrapper'>
//             <h2>{person[0].name.first} 
//             {person[0].name.last}</h2>
//             <h3>City: {person[0].city}</h3>
//             <h3>Country: {person[0].country}</h3>
//             <h3>Employer: {person[0].employer}</h3>
//             <h3>Title: {person[0].title}</h3>
//             {person[0].favoriteMovies.map(e => <p key={e}>{e}</p>)}
//           </div>
    
//         )
//     }
// }

import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let person = this.props.person
        return (
            <div className="card-wrapper">
                <h2>{person.name.first} {person.name.last}</h2>
                <h3>City: {person.city}</h3>
                <h3>Country: {person.country}</h3>
                <h3>Employer: {person.employer}</h3>
                <h3>Title: {person.title}</h3>
                {person.favoriteMovies.map(e => <p key={e}>{e}</p>)}
            </div>
        )
    }
}
