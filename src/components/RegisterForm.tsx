import React from "react";
import { Container, Button, FormGroup, Input, Col, ButtonGroup } from "reactstrap";
import { IUser } from "../App";
import { Link } from 'react-router-dom';



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
        // const ep = this.props.endPoint || "login";//
        fetch('https://a-point-meant.herokuapp.com/user/register', {
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
                        <ButtonGroup>
                            <Button type="submit" onClick={this.registerHandleSubmit}>Register</Button>
                            <Link to="/login">
                                <Button type="button">Already registered?</Button>
                            </Link>
                        </ButtonGroup>
                    </FormGroup>
                </Col>
            </Container>
        );
    }
};

export default RegisterForm;