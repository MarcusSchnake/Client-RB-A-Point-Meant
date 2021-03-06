import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup } from 'reactstrap';


type State = {
    data: Array<any>,
}

class ViewAllAppointments extends React.Component<{}, State> {
    constructor(props: State) {
        super(props);
        this.state = {
            data: []
        };
    };
    componentDidMount() {
        fetch('https://a-point-meant.herokuapp.com/appointment/', {
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
                    data: data
                })
            })
            .catch(err => console.log(err));
    }



    render() {
        return (
            <div>
                <h1>View All Appointments</h1>
                {this.state.data.map((appointment: any) => {
                    return (
                        <FormGroup className="appointmentDisplay">
                            <p>{appointment.client_name}</p>
                            <p>{appointment.phone}</p>
                            <p>{appointment.startDateTime}</p>
                            <p>{appointment.note}</p>
                            <p>{appointment.id}</p>
                            <section>
                                <Link to={`/appointment/update/${appointment.id}`}>
                                    <Button>
                                    Edit
                                    </Button>
                                </Link>
                                <Link to={`/appointment/delete/${appointment.id}`}>
                                    <Button>
                                        Delete
                                    </Button>
                                </Link>
                                <Link to={`/todo/getAll/${appointment.id}`}>
                                    <Button>
                                        Get All
                                    </Button>
                                </Link>
                                <Link to={`/todo/create/${appointment.id}`}>
                                    <Button>
                                        Create Todo
                                    </Button>
                                </Link>
                                <Button onClick={() => window.history.back()}>Go Back</Button>

                            </section>
                        </FormGroup>
                    )
                })}
            </div>
        );
    }
}

export default ViewAllAppointments;