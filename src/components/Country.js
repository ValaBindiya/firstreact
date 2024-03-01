import React, { Component } from 'react';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name:'Surat',
            population:'89.30 Lakhs'
        }
    }

    changeCity = () => {
        this.setState ({
            name:'Ahemdabad',
            population:'8.85 Lakhs'
        })

        // this.setState ({
        //     name:'Vadodra',
        //     population:'21.8 Lakhs'
        // })
    }
    
    render() {
        return (

            <>
                <h1>Class base stat components</h1>
                <h1>Country name is : {this.state.name}</h1>
                <h1>Time Zone is : {this.state.population}</h1>

                <button onClick={this.changeCity}>Change city</button>
            </>
        );
    }
}

export default Country;