import React from 'react';
import AppointmentForm from '../components/appointmentForm';
import {Button, Form, FormGroup, Input, Container} from 'reactstrap';

type State = {
    client_name: string,
    email: string,
    phone: string,
    startDateTime: string,
    note: string,
    
}

interface IUpdateAppointmentProps {
    client_name: string,
    email: string,
    phone: string,
    startDateTime: string,
    note: string,
    
}


class UpdateAppointment extends React.Component<IUpdateAppointmentProps, State> {
    constructor(props: IUpdateAppointmentProps) {
        super(props);
        this.state = {
            client_name: this.props.client_name,
            email: this.props.email,
            phone: this.props.phone,
            startDateTime: this.props.startDateTime,
            note: this.props.note,

        };
    };


//    handleSubmit = (event: any) => {
//         event.preventDefault();
//         const { client_name, phone, startDateTime, note } = this.state;
//         const appointment = {
//             client_name,
//             phone,
//             startDateTime,
//             note,
//         };
//         console.log(appointment);
//     };

    CreateAppointment = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:3000/appointment/create', {
            method: 'POST',
            body: JSON.stringify({
                Appointment: {
                    client_name: this.state.client_name,
                    phone: this.state.phone,
                    email: this.state.email,
                    startDateTime: this.state.startDateTime,
                    note: this.state.note,
                   
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };
   

    // UpdateAppointments = (event: any) => {
    //     const id = event.target.id;
    //     fetch(`http://localhost:3000/appointment/${id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             Appointment: {
    //                 client_name: this.state.client_name,
    //                 email: this.state.email,
    //                 phone: this.state.phone,
    //                 startDateTime: this.state.startDateTime,
    //                 note: this.state.note,
    //                 // id: this.state.id,
    //             },
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: 'Bearer ' + localStorage.getItem('token')
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err));
    // };


    GetAppointments = (event:any) => {
        const id = event.target.id;
        fetch(`http://localhost:3000/appointment/${id}`, {
            method: 'GET',
            body: JSON.stringify({
                appointments: {
                    client_name: this.state.client_name,
                    phone: this.state.phone,
                    startDateTime: this.state.startDateTime,
                    note: this.state.note,
                    // id: this.state.id,
                },
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    // DeleteAppointments = (event: any) => {
    //     const id = event.target.id;
    //     fetch(`http://localhost:3000/appointment/${id}`, {
    //         method: 'DELETE',
    //         body: JSON.stringify({
    //             appointments: {
    //                 client_name: this.state.client_name,
    //                 email: this.state.email,
    //                 phone: this.state.phone,
    //                 startDateTime: this.state.startDateTime,
    //                 note: this.state.note,
    //             },
    //         }),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    // };


    render() {
        // console.log(window.location.pathname.split('/')[3]);
        return (
            <Container>
                <AppointmentForm  client_name="" email="" phone="" startDateTime="" note="" 
                 />
            </Container>
        );
        return (
            <Container>
                
            </Container>
                
            
        );
    }
};




export default UpdateAppointment;
