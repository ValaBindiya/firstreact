import React, { Component } from 'react';


// constructor
// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }


// componentDidMount()
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" })
        }, 1000)
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}


// getDerivedStateFromProps()
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red" };
//         console.log(this.state);
//     }

//     static getDerivedStateFromProps(props, state) {
//         return { favoritecolor: props.favcol };
//     }

//     render() {
//         return (

//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>

//         );
//     }
// }


// getDerivedStateFromProps()
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }


// shouldComponentUpdate()
// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     shouldComponentUpdate() {
//       return true;
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }
//     render() {
//       return (
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }



// getSnapshotBeforeUpdate()
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red" };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoritecolor: "yellow" })
//         }, 1000)
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         document.getElementById("div1").innerHTML =
//             "Before the update, the favorite was " + prevState.favoritecolor;
//     }
//     componentDidUpdate() {
//         document.getElementById("div2").innerHTML =
//             "The updated favorite is " + this.state.favoritecolor;
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <div id="div1"></div>
//                 <div id="div2"></div>
//             </div>
//         );
//     }
// }


// componentDidUpdate
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { favoritecolor: "red" };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoritecolor: "yellow" })
//         }, 1000)
//     }
//     componentDidUpdate() {
//         document.getElementById("mydiv").innerHTML =
//             "The updated favorite is " + this.state.favoritecolor;
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <div id="mydiv"></div>
//             </div>
//         );
//     }
// }


// componentWillUnmount
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }
//   delHeader = () => {
//     this.setState({ show: false });
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//         {myheader}
//         <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }



export default Header;