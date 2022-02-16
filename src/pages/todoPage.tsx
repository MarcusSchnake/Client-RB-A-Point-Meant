import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap'
import TodoForm from '../components/todoForm';

type State = {
  subject: string,
  todo_item: string,
}

interface IUpdateTodo {
  subject: string,
  todo_item: string,
}


class UpdateTodo extends React.Component<IUpdateTodo, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      subject: this.props.subject,
      todo_item: this.props.todo_item,  
    };
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const { subject = "", todo_item = "" } = this.state;
    const Todo = {
      subject,
      todo_item,
    };
    console.log(Todo);
  };

  UpdateTodo = () => {
    fetch('http://localhost:3000/todos', {
      method: 'PUT',
      body: JSON.stringify({
        Todo: {
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


  GetTodo = () => {
    fetch('http://localhost:3000/todos', {
      method: 'GET',
      body: JSON.stringify({
        Todo: {
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

  DeleteTodo = () => {
    fetch('http://localhost:3000/todos', {
      method: 'DELETE',
      body: JSON.stringify({
        Todo: {
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
        <h1>Todo's</h1>
        <TodoForm subject="" todo_item="" />
        <Form>
          <FormGroup>
            {/* <Input
              type="text"
              placeholder="subject"
              onChange={(e) => this.setState({ subject: e.target.value })}
            value={this.state.subject}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              placeholder="todo_item"
              onChange={(e) => this.setState({ todo_item: e.target.value })}
              value={this.state.todo_item}
            /> */}
            <Button type="submit">Submit</Button>
            <Button onClick={this.UpdateTodo}>Update</Button>
          </FormGroup>

        </Form>
      </div>
    );
  }
};




export default UpdateTodo;
