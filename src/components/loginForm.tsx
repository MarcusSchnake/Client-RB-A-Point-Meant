import React from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import { Link } from 'react-router-dom';
import { IUser } from "../App";


type LoginFormProps = {
  updateToken: (e: IUser) => void;
  email: string;
  password: string;
  setEmail: (e: string) => void;
  setPassword: (e: string) => void;

};

type State = {
  email: string;
  password: string;

};

class LoginForm extends React.Component<LoginFormProps, State> {
  constructor(props: LoginFormProps) {
    super(props);
  }
  //create handle submit for login and then register with endpoints****
  loginHandleSubmit = () => {
    console.log(this.props.email, this.props.password);
    fetch(`http://localhost:3000/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: this.props.email,
          password: this.props.password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.sessionToken) {
          this.props.updateToken(data);
        }

      });
  };

  render() {
    console.log(this.props)
    return (
      <Container md="6">
        <h1>Login</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.loginHandleSubmit();
          }}
        >
          <FormGroup floating>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => this.props.setEmail(e.target.value)}
              value={this.props.email}
            />
          </FormGroup>

          <FormGroup floating>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => this.props.setPassword(e.target.value)}
              value={this.props.password}
            />
            <Button type="submit">Login</Button>
            <Link to="/register">
              <Button type="button">Need To Register?</Button>
            </Link>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}


export default LoginForm;