import React, { Component } from 'react';
import DoctorCard from '../../components/DoctorCard/DoctorCard';

const doctor = [
    {
        "id": 1,
        "name": "Dr. Ahmed Latiwala",
        "age": 25,
        "apointment fees": '₹800',
        "degree": 'General Physician'
    },
    {
        "id": 2,
        "name": "Dr. Samir Vankawala",
        "age": 30,
        "apointment fees": '₹580',
        "degree": 'MBBS'
    },
    {
        "id": 3,
        "name": " Dr. Preeti R Shah",
        "age": 28,
        "apointment fees": '₹500',
        "degree": 'BDS'
    },
    {
        "id": 4,
        "name": "Dr. Kaushal B Patel",
        "age": 32,
        "apointment fees": '₹1500',
        "degree": 'MBBS'
    },
    {
        "id": 5,
        "name": "Dr. Nidhi Kapadia",
        "age": 32,
        "apointment fees": '₹300',
        "degree": 'BDS - Dentist'
    },
    {

        "id": 6,
        "name": "Dr. Ahmed Latiwala",
        "age": 25,
        "apointment fees": '₹800',
        "degree": 'General Physician'
    },
    {
        "id": 7,
        "name": "Dr. Samir Vankawala",
        "age": 30,
        "apointment fees": '₹580',
        "degree": 'MBBS'
    },
    {
        "id": 8,
        "name": " Dr. Preeti R Shah",
        "age": 28,
        "apointment fees": '₹500',
        "degree": 'BDS'
    },
    {
        "id": 9,
        "name": "Dr. Kaushal B Patel",
        "age": 32,
        "apointment fees": '₹1500',
        "degree": 'MBBS'
    },
    {
        "id": 10,
        "name": "Dr. Nidhi Kapadia",
        "age": 32,
        "apointment fees": '₹300',
        "degree": 'BDS - Dentist'
    }
]

class Doctor extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Doctor :-</h1>
                <div className='row container'>

                    {
                        doctor.map((v, i) => (
                            <>

                                <DoctorCard data={v} />
                            </>
                        ))
                    }


                </div>
            </div>
        );
    }
}

export default Doctor;