import React from 'react';
import LoginForm from '../components/LoginForm';
import { Form, FormGroup, Input, Button } from 'reactstrap';

type State = {
    email: string,
    password: string,};

interface ILoginPageProps {
    email: string,
    password: string,
};

class LoginPage extends React.Component<ILoginPageProps, State>{
    constructor(props:ILoginPageProps, state: State) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    };

    render() {

        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm update={ ( ) => console.log}/>
                {/* <Form>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form> */}
            </div>
        );

    }
}

export default LoginPage;