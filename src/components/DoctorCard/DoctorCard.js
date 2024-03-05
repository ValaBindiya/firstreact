import React, { Component } from 'react';
import '../../components/Card/Card.css'

class DoctorCard extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log(props);

    // }
    render() {
        return (
            <div id='disp'>
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.age}</h1>
                <h1>{this.props.data.degree}</h1>

            </div>
        );
    }
}

export default DoctorCard;