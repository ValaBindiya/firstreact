import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Surat',
            population: '89.30 Lakhs'
        }
    }


    changeCountry = () => {
        console.log("fgdjhgj");
        this.setState({
            name: 'Ahemdabad',
            population: '85.30 Lakhs'
        })

    };

    render() {
        return (
            <>
                <h1>Class base stat components</h1>
                {
                    this.props.CountryName === 'India' ? <h3> Country name is :{'Delhi'}</h3> : <h3>Country name is : {'New york'}</h3>
                }
                {
                    this.props.CountryName === 'India' ? <h3> Time Zone is : {this.state.population}</h3> : <h3>Time Zone is : {this.state.population}</h3>
                }

                {/* <h1>Country name is : {this.state.name}</h1> */}
                {/* <h1>Time Zone is : {this.state.population}</h1> */}

                <button onClick={this.changeCountry}>Change country</button>


            </>
        );
    }
}

export default City;