import React from 'react';
import {Link} from 'react-router-dom';


type State = {
    data: Array<any>,
}

class ViewAllAppointments extends React.Component<{},State> {
    constructor(props: State) {
        super(props);
        this.state = {
            data: []
        };
    };
    componentDidMount() {
        fetch('http://localhost:3000/appointment/', {
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
                        <div>
                            <p>{appointment.client_name}</p>
                            <p>{appointment.phone}</p>
                            <p>{appointment.startDateTime}</p>
                            <p>{appointment.note}</p>
                            <p>{appointment.id}</p>
                            <Link to={`/appointment/update/${appointment.id}`}>Edit</Link>
                            <Link to={`/appointment/delete/${appointment.id}`}>Delete</Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ViewAllAppointments;