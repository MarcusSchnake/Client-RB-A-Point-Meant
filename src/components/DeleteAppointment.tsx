import React from 'react';

type State = {
    didDelete: boolean,
};



class DeleteAppointment extends React.Component<{}, State> {
    constructor(props: State) {
        super(props);
        this.state = {
            didDelete: false,
        };
    }
    Delete = () => {
        const id = window.location.pathname.split('/')[3];
        fetch(`http://localhost:3000/appointment/delete/${id}`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    didDelete: true,
                    
                })
            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.Delete();
    }
    render() {
        return (
            <div>
                <h1>Appointment {this.state.didDelete ? "Successfully Deleted" : "Is Pending Delete" }</h1>
            </div>
        )
    }            
}

export default DeleteAppointment;