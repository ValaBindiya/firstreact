import React, { Component } from 'react';
import style from '../../containers/Doctor/Doctor_card.module.css'

class DoctorCard extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log(props);

    // }
    render() {
        return (
            <div className={style.disp}>
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.age}</h1>
                <h1>{this.props.data.degree}</h1>

            </div>
        );
    }
}

export default DoctorCard;