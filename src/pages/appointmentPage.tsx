import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap'
import AppointmentForm from '../components/appointmentForm';

type State = {
    client_name: string,
    phone_number: string,
    startDateTime: string,
    note: string,
}

interface IUpdateAppointmentProps {
    client_name: string,
    phone_number: string,
    startDateTime: string,
    note: string,
}


class UpdateAppointment extends React.Component<IUpdateAppointmentProps, State> {
    constructor(props: IUpdateAppointmentProps) {
        super(props);
        this.state = {
            client_name: this.props.client_name,
            phone_number: this.props.phone_number,
            startDateTime: this.props.startDateTime,
            note: this.props.note,
        };
    };


    handleSubmit = (event: any) => {
        event.preventDefault();
        const { client_name, phone_number, startDateTime, note } = this.state;
        const appointment = {
            client_name,
            phone_number,
            startDateTime,
            note,
        };
        console.log(appointment);
    };
    UpdateAppointments = (event: any) => {
        fetch('http://localhost:3000/appointments', {
            method: 'PUT',
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


    GetAppointments = () => {
        fetch('http://localhost:3000/appointments', {
            method: 'GET',
            body: JSON.stringify({
                appointments: {
                    client_name: this.state.client_name,
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

    DeleteAppointments = () => {
        fetch('http://localhost:3001/appointments', {
            method: 'DELETE',
            body: JSON.stringify({
                appointments: {
                    client_name: this.state.client_name,
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
                {/* <h1>Appointment Page</h1>
                <AppointmentForm client_name="" phone_number="" startDateTime="" note="" />
                <Form>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Client Name"
                            onChange={(e) => this.setState({ client_name: e.target.value })}
                            value={this.state.client_name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            onChange={(e) => this.setState({ phone_number: e.target.value })}
                            value={this.state.phone_number}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Start Date and Time"
                            onChange={(e) => this.setState({ startDateTime: e.target.value })}
                            value={this.state.startDateTime}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Note"
                            onChange={(e) => this.setState({ note: e.target.value })}
                            value={this.state.note}
                        />
                    </FormGroup>
                </Form> */}
            </div>
        );
    }
};




export default UpdateAppointment;
