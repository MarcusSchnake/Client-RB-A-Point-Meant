import React from 'react';
import AppointmentForm from '../components/appointmentForm';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

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




    CreateAppointment = (event: any) => {
        event.preventDefault();
        fetch('https://a-point-meant.herokuapp.com/appointment/create', {
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

    GetAppointments = (event: any) => {
        const id = event.target.id;
        fetch(`https://a-point-meant.herokuapp.com/appointment/${id}`, {
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

    render() {
        // console.log(window.location.pathname.split('/')[3]);
        return (
            <Container>
                <AppointmentForm client_name="" email="" phone="" startDateTime="" note=""
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
