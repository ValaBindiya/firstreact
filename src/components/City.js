import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'India',
            timezone: 'GMT+5:30'
        }
    }


    changeCountry = () => {
        console.log("fgdjhgj");
        this.setState ({
            name: 'USA',
            timezone: 'GMT-5'
        })

    };

    render() {
        return (
            <>
                <h1>Class base stat components</h1>
                <h1>Country name is : {this.state.name}</h1>
                <h1>Time Zone is : {this.state.timezone}</h1>

                <button onClick={this.changeCountry}>Change country</button>
            </>
        );
    }
}

export default City;