import React from 'react';
import { Form, Button } from 'reactstrap';
// import {UseHistory} from 'react-router-dom';




type State = {
    subject: string,
    todo_item: string,
    didUpdate: boolean,
}



class UpdateTodo extends React.Component<{}, State> {

    constructor(props: State) {
        super(props);
        this.state = {
            subject: '',
            todo_item: '',
            didUpdate: false,
        };
    };

    componentDidMount() {
        const id = window.location.pathname.split('/')[3];
        fetch(`https://a-point-meant.herokuapp.com/todo/${id}`, {
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
                    subject: data.subject,
                    todo_item: data.todo_item,
                    didUpdate: true,
                })
            })
            .catch(err => console.log(err));
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const { subject, todo_item } = this.state;
        const todo = {
            subject,
            todo_item,
        };
        const id = window.location.pathname.split('/')[3];
        fetch(`https://a-point-meant.herokuapp.com/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                todo: {
                    subject: this.state.subject,
                    todo_item: this.state.todo_item,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

            .catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <h1>Update Todo {this.state.didUpdate ?  "Successfully Updated" : "Is Pending Update" }</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Subject:
                        <input type='text' value={this.state.subject} onChange={(event: any) => this.setState({ subject: event.target.value })} name='subject' />
                    </label>
                    <br />
                    <label>
                        Todo Item:
                        <input type='text' value={this.state.todo_item} onChange={(event: any) => this.setState({ todo_item: event.target.value })} name='todo_item' />
                    </label>
                    <br />
                    <Button onclick='submit'>Submit</Button>

                    {/* <input type='submit' value='Submit' /> */}
                   <Button onClick={() => window.history.back()}>Go Back</Button>
                </form>
            </div>
        );
    }
}

export default UpdateTodo;


