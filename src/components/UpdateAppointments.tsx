import React from 'react';

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
       const id = window.location.pathname;
        fetch(`http://localhost:3000/appointment/update/${id}`, {
            method: 'PUT',
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
                    email: data.email,
                    phone: data.phone,
                    startDateTime: data.startDateTime,
                    note: data.note,
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Update Appointment</h1>
                <form>
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
                    <label>Start Date and Time:</label>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }            
}

export default UpdateAppointment;