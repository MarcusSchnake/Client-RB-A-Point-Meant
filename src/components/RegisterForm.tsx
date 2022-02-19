import React from "react";
import { Container, Button, FormGroup, Input, Col } from "reactstrap";
import { IUser } from "../App";
import {Link} from 'react-router-dom';



type RegisterFormProps = {
    updateToken: (e: IUser) => void;
    email: string;
    password: string;
    setEmail: (e: string) => void;
    setPassword: (e: string) => void;

};

class RegisterForm extends React.Component<RegisterFormProps> {
    constructor(props: RegisterFormProps) {
        super(props);
    }

    registerHandleSubmit = () => {
        console.log("login handle");
        console.log(this.props.email, this.props.password);
        // const ep = this.props.endPoint || "login";//
        fetch(`http://localhost:3000/user/register`, {
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
                console.log(data);

                if (data?.sessionToken) {
                    this.props.updateToken(data);

                }
            });
    };
    render() {

        return (
            <Container>
                <h1>Register</h1>
                <Col>
                    <FormGroup md="6">
                        <Input
                            type="text"
                            placeholder="Email"
                            // onChange={(e) => this.setState({ email: e.target.value })}
                            onChange={(e) => this.props.setEmail(e.target.value)}
                            value={this.props.email}
                        />
                    </FormGroup>

                    <FormGroup md="6">
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.props.setPassword(e.target.value)}
                            value={this.props.password}
                        />
                        <Button type="submit" onClick={this.registerHandleSubmit}>Register</Button>
                        <Link to="/login">
                            <Button type="button">Already registered?</Button>
                        </Link>
                    </FormGroup>
                </Col>
            </Container>
        );
    }
};

export default RegisterForm;