import React from 'react';




type State = {
    subject: string,
    todo_item: string,
}



class UpdateTodo extends React.Component<{}, State> {

    constructor(props: State) {
        super(props);
        this.state = {
            subject: '',
            todo_item: '',
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
                <h1>Update Todo</h1>

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
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default UpdateTodo;


