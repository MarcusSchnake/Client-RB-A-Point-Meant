import React from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap'


type State = {
  client_name: string,
  phone_number: string,
  startDateTime: string,
  note: string,
}

interface IAppointmentPage {

  client_name: string,
  phone_number: string,
  startDateTime: string,
  note: string,
}

class AppointmentForm extends React.Component<IAppointmentPage, State> {
  constructor(props: IAppointmentPage) {
    super(props);
    this.state = {
      client_name: this.props.client_name,
      phone_number: this.props.phone_number,
      startDateTime: this.props.startDateTime,
      note: this.props.note,
    }
  };



  render() {
    // console.log(this.props.client_name);
    return (
        <Container md="12">
          <Form md="6">
          <h1>Appointment Page</h1>
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





