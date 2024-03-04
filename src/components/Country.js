import React, { Component } from 'react';
import City from './City';

class Country extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'India',
            population: 'GMT+5:30 '
        }
    }

    changeCity = () => {
        this.setState({
            name: 'USA',
            population: 'GMT-5:00'
        })
    }

    render() {
        return (

            <>
                <h1>Class base stat components</h1>
                <h1>Country name is : {this.state.name}</h1>
                <h1>Time Zone is : {this.state.population}</h1>

                <button onClick={this.changeCity}>Change city</button>

                <City CountryName = {this.state.name} />
            </>
        );
    }
}

export default Country;