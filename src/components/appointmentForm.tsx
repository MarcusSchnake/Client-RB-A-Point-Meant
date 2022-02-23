import React from 'react';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';




type State = {
  client_name: string,
  email: string,
  phone: string,
  startDateTime: string,//2022-03-03 05:30:00 formate
  note: string,
  didCreate:boolean,


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
        didCreate:false,

    }
  };


  handleCreateSubmit = () => {//need to make all fields not null
    // console.log(this.state)
    fetch('https://a-point-meant.herokuapp.com/appointment/create', {
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
        this.setState({didCreate:true})
      }
      )
      .catch(err => console.log(err));
  };




  render() {
    return (
      <Container md="12">
        <h1>Appointment Page {this.state.didCreate ? "Successfully Scheduled" : ""} 
        </h1>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleCreateSubmit();
          }}
        >
          <FormGroup>
            <label>Name</label>
            <Input
              type="text"
              placeholder="Client Name"
              onChange={(e) => this.setState({ client_name: e.target.value })}
              value={this.state.client_name}
            />
          </FormGroup>
          <FormGroup>
            <label>Phone</label>
            <Input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => this.setState({ phone: e.target.value })}
              value={this.state.phone}
            />
          </FormGroup>
          <FormGroup>
            <label>Email</label>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
          <label> Date and Time (yyyy-mm-dd hh:mm:ss):</label>
            <Input
              type="text"
              placeholder="Start Date and Time "
              onChange={(e) => this.setState({ startDateTime: e.target.value })}
              value={this.state.startDateTime}
            />
          </FormGroup>
          <FormGroup >
            <label>Note</label>
            <Input
              type="text"
              placeholder="Note"
              onChange={(e) => this.setState({ note: e.target.value })}
              value={this.state.note}
            />
          </FormGroup>
          <Button type="submit" >Submit</Button>
          <Link to={`/appointment/getAll`}>
            <Button>
              View All Appointments
            </Button>
          </Link>
            <Button onClick={() => window.history.back()}>Go Back</Button>
        </Form>
      </Container>

    );

  }
}


export default AppointmentForm;





