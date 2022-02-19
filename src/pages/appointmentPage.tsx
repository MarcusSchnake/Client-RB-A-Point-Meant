import React from 'react';
import AppointmentForm from '../components/appointmentForm';

type State = {
    client_name: string,
    email: string,
    phone_number: string,
    startDateTime: string,
    note: string,
}

interface IUpdateAppointmentProps {
    client_name: string,
    email: string,
    phone_number: string,
    startDateTime: string,
    note: string,
}


class UpdateAppointment extends React.Component<IUpdateAppointmentProps, State> {
    constructor(props: IUpdateAppointmentProps) {
        super(props);
        this.state = {
            client_name: this.props.client_name,
            email: this.props.email,
            phone_number: this.props.phone_number,
            startDateTime: this.props.startDateTime,
            note: this.props.note,
        };
    };


//    handleSubmit = (event: any) => {
//         event.preventDefault();
//         const { client_name, phone_number, startDateTime, note } = this.state;
//         const appointment = {
//             client_name,
//             phone_number,
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
                    phone_number: this.state.phone_number,
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
   

    UpdateAppointments = (event: any) => {
        const id = event.target.id;
        fetch(`http://localhost:3000/appointment/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                Appointment: {
                    client_name: this.state.client_name,
                    email: this.state.email,
                    phone_number: this.state.phone_number,
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


    // GetAppointments = () => {
    //     fetch('http://localhost:3000/appointment', {
    //         method: 'GET',
    //         body: JSON.stringify({
    //             appointments: {
    //                 client_name: this.state.client_name,
    //                 phone_number: this.state.phone_number,
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

    DeleteAppointments = (event: any) => {
        const id = event.target.id;
        fetch(`http://localhost:3000/appointment/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                appointments: {
                    client_name: this.state.client_name,
                    email: this.state.email,
                    phone_number: this.state.phone_number,
                    startDateTime: this.state.startDateTime,
                    note: this.state.note,
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


    render() {
        return (
            <div>
                <AppointmentForm  client_name="" email="" phone_number="" startDateTime="" note=""
                 />

              
            </div>
        );
    }
};




export default UpdateAppointment;
