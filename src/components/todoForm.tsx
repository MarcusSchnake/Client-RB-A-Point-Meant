import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap'

interface ITodoFormProps {
  subject: string,
  todo_item: string,
}

class ITodoFormProps extends React.Component<ITodoFormProps> {
  constructor(props: ITodoFormProps) {
    super(props);
    this.state = { subject: "", todo_item: "" };
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
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
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

// export default function Todo () {
//     return (
//       <h1>
//         ToDo's
//       </h1>
//     );
// };
export default ITodoFormProps;