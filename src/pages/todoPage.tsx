import React from 'react';
import { Form, FormGroup, Input, Container, Button, ButtonGroup } from 'reactstrap'
import { IUser } from '../App';


type State = {
  subject: string,
  todo_item: string,
}

type Props = {
  updateToken: (e: IUser) => void;
};

interface ICreateTodo {
  subject: string,
  todo_item: string,
}


class CreateTodo extends React.Component<ICreateTodo, State> {
  constructor(props: ICreateTodo) {
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

  PostTodo = () => {
    fetch('https://a-point-meant.herokuapp.com/todo/create', {
      method: 'POST',
      body: JSON.stringify({
        todo_item: {
          appointmentId:window.location.pathname.split('/')[3],
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
        <Form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <FormGroup>
            <Container md="6">
              <h1>Todo's</h1>

              <FormGroup md="6">
                <Input
                  type="text"
                  placeholder="Subject"
                  onChange={(e) => this.setState({ subject: e.target.value })}
                  value={this.state.subject}
                />
              </FormGroup >
              <FormGroup md="6">
                <Input
                  type="text"
                  placeholder="Todo Item"
                  onChange={(e) => this.setState({ todo_item: e.target.value })}
                  value={this.state.todo_item}
                />
                <ButtonGroup>

                  <Button color="primary" onClick={this.PostTodo}>Create</Button>
                  
                </ButtonGroup>

              </FormGroup>
            </Container>
          </FormGroup>

        </Form>
      </div>
    );
  }
};




export default CreateTodo;
