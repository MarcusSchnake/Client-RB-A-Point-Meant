import React from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import AppointPages from '../pages/appointmentPage'




type State = {
  client_name: string,
  email: string,
  phone_number: string,
  startDateTime: string,
  note: string,
}

interface IAppointmentPage {

  client_name: string,
  email: string,
  phone_number: string,
  startDateTime: string,
  note: string,
}


class AppointmentForm extends React.Component<IAppointmentPage, State> {
  constructor(props: IAppointmentPage) {
    super(props);
    this.state = {
      client_name: this.props.client_name,
      email: this.props.email,
      phone_number: this.props.phone_number,
      startDateTime: this.props.startDateTime,
      note: this.props.note,
    }
  };
  handleSubmit = (event:any) => {//need to make all fields not null
    fetch('http://localhost:3000/appointment/create', {
      method: 'POST',
      body: JSON.stringify({
        appointment: {
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
      .then(data => {
        console.log(data);
      }
      )

   
    };
    



  render() {
    return (
        <Container md="12">
          <h1>Appointment Page</h1>
          <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleSubmit(event);
          }}
        >
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
          <FormGroup >
            <Input
              type="text"
              placeholder="Note"
              onChange={(e) => this.setState({ note: e.target.value })}
              value={this.state.note}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Button type="submit">Update</Button>
        </Form>
        </Container>
        
    );
  }
}


export default AppointmentForm;





