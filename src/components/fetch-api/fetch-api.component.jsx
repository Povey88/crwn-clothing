// import React from 'react';

// export default class FetchRandomUser extends React.Component {

//     state = {
//         loading: true,
//         people: null
//     }

//     async componentDidMount() {
//         const url = 'https://api.randomuser.me/?res=5';
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         this.setState({people: data.results, loading: false})
//     }


//     render() {

//         if (this.state.people.length) {
//             return <div>loading...</div>
//         }
        
//         if (!this.state.people.length) {
//             return <div>didn't receive a person</div>
//         }

//         return (
//             <div>
//                  <div>{this.state.person.name.title}</div>
//                  <div>{this.state.person.name.first}</div>
//                  <div>{this.state.person.name.last}</div>
//                  <img src={this.state.person.picture.large} alt='showing person'/>
//             </div>
//         );
//      }
//  }

