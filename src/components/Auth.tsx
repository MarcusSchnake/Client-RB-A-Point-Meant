import React from "react";
import { Navigate }  from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/loginForm";
import { Container, Row, Col } from "reactstrap";
import { IUser } from "../App"


type AuthProps =
 {
  updateToken: (e: IUser) => void;
};

type AuthState = {
  hasError: boolean;
  email: string;
  password: string;
  redirect: string | null;
};

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      hasError: false,
      email: "",
      password: "",
      redirect: null,
    };
  }

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
      return <Navigate to="/appointment" />;
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
                updateToken={this.props.updateToken}
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
                updateToken={this.props.updateToken}
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
