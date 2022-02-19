import React from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/loginForm";
import { Container, Row, Col } from "reactstrap";
import { IUser } from "../App"



type EmptyProps = {
}

type AuthState = {
  hasError: boolean;
  email: string;
  password: string;
  loggedIn: boolean | null;
};

class Auth extends React.Component<EmptyProps, AuthState> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      hasError: false,
      email: "",
      password: "",
      loggedIn: null
    };
  }

  updateToken = (userData: IUser) => {
    localStorage.setItem('token', userData.sessionToken);
    this.setState ({
      loggedIn: true
    })
  };

  setEmail = (input: string) => {
    this.setState({ email: input });
  }

  setPassword = (input: string) => {
    this.setState({ password: input });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }
    if (localStorage.getItem('token')) {
       window.location.replace("/appointment");
    }
    const pathname = window.location.pathname;
    const showRegister = pathname === '/register';
    const showLogin = (pathname === '/login' || pathname === '/');
    console.log(window.location.pathname, showRegister, showLogin)//needed for all crud endpoints
    
    return (
      
      <Container>
        <Row
          style={{ justifyContent: 'center' }}
        >
          {(showRegister) && (
            <Col md="6">
              <RegisterForm
                updateToken={this.updateToken}
                setEmail={this.setEmail}
                setPassword={this.setPassword}
                email={this.state.email}
                password={this.state.password}
              />
            </Col>
          )}
          {(showLogin) && (
            <Col md="6">
              <LoginForm
                updateToken={this.updateToken}
                setEmail={this.setEmail}
                setPassword={this.setPassword}
                email={this.state.email}
                password={this.state.password}
              />
            </Col>
          )}
        </Row>
      </Container >
    );
  }
}

export default Auth;
