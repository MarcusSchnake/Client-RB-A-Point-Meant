import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap'


interface IAppointmentPage {

  client_name: string,
  phone_number: string,
  startDateTime: Date,
  note: string,
}

class AppointmentForm extends React.Component<IAppointmentPage> {
  constructor(props:IAppointmentPage) {
    super(props);
    this.state={client_name: "", phone_number: "", startDateTime: new Date(), note: ""};}
  


  render() {
    return (
      <div>
        <h1>Appointment Page</h1>
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
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}





export   default AppointmentForm;


// export default function AppointmentForm () {
  
//     return (
//       <div>
//           <h1>Appointment</h1>
        
//       </div>
//     );
// }

  
 