import React from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/loginForm";
import { Container, Row, Col } from "reactstrap";


type AuthProps = {
  updateToken: (e:string) => void;
};

type AuthState = {
  hasError: boolean;
  email: string;
  password: string;
  setEmail: (e:string) => void;
  setPassword: (e:string) => void;
};

class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      hasError: false,
      email: "",
      password: "",
      setEmail: (e: string) => {
        this.setState({ email: e });
      },
      setPassword: (e: string) => {
        this.setState({ password: e });
      },
    };
  }

  static getDerivedStateFromError(error: string) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    console.log("Auth render");
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }
    return (
      <Container>
        <Row>
          <Col md="6">
            <RegisterForm 
            updateToken={this.props.updateToken}
            setEmail={this.state.setEmail} 
            setPassword={this.state.setPassword}
            email={this.state.email}
            password={this.state.password} 
            />
          </Col>
          <Col md="6">
            <LoginForm  
            updateToken={this.props.updateToken}
            setEmail={this.state.setEmail} 
            setPassword={this.state.setPassword}
            email={this.state.email}
            password={this.state.password} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Auth;
