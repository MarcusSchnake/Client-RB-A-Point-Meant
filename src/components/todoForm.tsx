import React from 'react';
// import { type } from 'node:os';
import { Form, FormGroup, Input } from 'reactstrap'



type State = {
  subject: string,
  todo_item: string,
}


interface ITodoFormProps {
  subject: string,
  todo_item: string,
}

class TodoFormProps extends React.Component<ITodoFormProps, State> {
  constructor(props: ITodoFormProps) {
    super(props);
    this.state = {
      subject: this.props.subject,
      todo_item: this.props.todo_item,
    };
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Input
              type="text"
              placeholder="Subject"
              onChange={(e) => this.setState({ subject: e.target.value })}
              value={this.state.subject}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              placeholder="Todo Item"
              onChange={(e) => this.setState({ todo_item: e.target.value })}
              value={this.state.todo_item}
            />
          </FormGroup>
          
        </Form>
      </div>
    );
  }
}


export default TodoFormProps;
