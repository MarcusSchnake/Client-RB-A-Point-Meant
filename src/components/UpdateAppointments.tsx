import React from 'react';
import { FormGroup, Form, Button } from 'reactstrap';


type State = {
    client_name: string,
    email: string,
    phone: string,
    startDateTime: string,
    note: string,
};



class UpdateAppointment extends React.Component<{}, State> {
    constructor(props: State) {
        super(props);
        this.state = {
            client_name: '',
            email: '',
            phone: '',
            startDateTime: '',
            note: '',

        };
    }
    updateAppointment = (event: any) => {
        const id = window.location.pathname.split('/')[3];
        fetch(`https://a-point-meant.herokuapp.com/appointment/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                appointment: {
                    client_name: this.state.client_name,
                    phone: this.state.phone,
                    email: this.state.email,
                    startDateTime: this.state.startDateTime,
                    note: this.state.note,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        const id = window.location.pathname.split('/')[3];
        fetch(`https://a-point-meant.herokuapp.com/appointment/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    client_name: data.client_name,
                    phone: data.phone,
                    email: data.email,
                    startDateTime: data.startDateTime,
                    note: data.note,
                })
            }
            ).catch(err => console.log(err));

    }

    render() {
        return (
            <FormGroup>
                <h1>Update Appointment</h1>
                <Form
                    onSubmit={(event: any) => {
                        event.preventDefault();
                        this.updateAppointment(event);
                    }}>

                    <label>Client Name:</label>
                    <input
                        type="text"
                        name="client_name"
                        value={this.state.client_name}
                        onChange={(event: any) => this.setState({ client_name: event.target.value })}
                    />
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={(event: any) => this.setState({ email: event.target.value })}
                    />
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={(event: any) => this.setState({ phone: event.target.value })}
                    />
                    <label> Date and Time (yyyy-mm-dd hh:mm:ss):</label>
                    <input
                        type="text"
                        name="startDateTime"
                        value={this.state.startDateTime}
                        onChange={(event: any) => this.setState({ startDateTime: event.target.value })}
                    />
                    <label>Note:</label>
                    <input
                        type="text"
                        name="note"
                        value={this.state.note}
                        onChange={(event: any) => this.setState({ note: event.target.value })}
                    />
                </Form>
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => window.history.back()}>Go Back</Button>

            </FormGroup>
        )
    }
}

export default UpdateAppointment;