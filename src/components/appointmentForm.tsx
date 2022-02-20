import React from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import DeleteAppointment from '../components/DeleteAppointment';
import UpdateAppointments from '../components/UpdateAppointments';
import ViewAllAppointments from '../components/ViewAllAppointments';



type State = {
  client_name: string,
  email: string,
  phone: string,
  startDateTime: string,//2022-03-03 05:30:00 formate
  note: string,

}

interface IAppointmentPage {

  client_name: string,
  email: string,
  phone: string,
  startDateTime: string,
  note: string,

}


class AppointmentForm extends React.Component<IAppointmentPage, State> {
  constructor(props: IAppointmentPage) {
    super(props);
    this.state = {
      client_name: this.props.client_name,
      email: this.props.email,
      phone: this.props.phone,
      startDateTime: this.props.startDateTime,
      note: this.props.note,

    }
  };


  handleCreateSubmit = (event: any) => {//need to make all fields not null
    // console.log(this.state)
    fetch('http://localhost:3000/appointment/create', {
      method: 'POST',
      body: JSON.stringify({
        appointment: {
          client_name: this.state.client_name,
          phone: this.state.phone,
          startDateTime: this.state.startDateTime,
          note: this.state.note,
          email: this.state.email,

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
      .catch(err => console.log(err));
  };




  render() {
    return (
      <Container md="12">
        <h1>Appointment Page</h1>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleCreateSubmit(event);
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
              onChange={(e) => this.setState({ phone: e.target.value })}
              value={this.state.phone}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
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
          <Button type="submit" >Submit</Button>
          <Button id="submitUpdate" onclick={UpdateAppointments}>Update</Button>
          <Button id="deleteButton" >Delete</Button>
          <Button id="getAppointments" onclick={ViewAllAppointments}>Get All</Button>

        </Form>
      </Container>

    );

  }
}


export default AppointmentForm;





