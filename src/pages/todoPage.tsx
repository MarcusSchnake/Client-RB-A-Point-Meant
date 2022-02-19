import React from 'react';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap'
import { IUser } from '../App';
import TodoForm from '../components/todoForm';

type State = {
  subject: string,
  todo_item: string,
}

type Props = {
  updateToken: (e: IUser) => void;
};

interface IUpdateTodo {
  subject: string,
  todo_item: string,
}


class UpdateTodo extends React.Component<IUpdateTodo, State> {
  constructor(props: IUpdateTodo) {
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

  CreateTodo = () => {
    fetch('http://localhost:3000/todo/create', {
      method: 'POST',
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

  UpdateTodo = () => {
    fetch('http://localhost:3000/todo/create', {
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
        
        <TodoForm subject="" todo_item="" />
        <Form onSubmit={(e) => {
            e.preventDefault();
          }}>
          <FormGroup>
          <Container md= "6">
          <h1>Todo's</h1>
        
        <FormGroup md="6">
          <Input
            type="text"
            placeholder="Subject"
            onChange={(e) => this.setState({ subject: e.target.value })}
            value={this.state.subject}
          />
        </FormGroup >
        <FormGroup md= "6">
          <Input
            type="text"
            placeholder="Todo Item"
            onChange={(e) => this.setState({ todo_item: e.target.value })}
            value={this.state.todo_item}
          />
            <Button onClick={this.CreateTodo} type="submit">Create Todo</Button>
            <Button onClick={this.GetTodo} type="submit">Get Todo's</Button>
            <Button onClick={this.UpdateTodo} type="submit">Update</Button>
          
        </FormGroup>
    </Container>
          </FormGroup>

        </Form>
      </div>
    );
  }
};




export default UpdateTodo;
