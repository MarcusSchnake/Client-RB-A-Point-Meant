import React from 'react';
import Auth from '../components/Auth';


type LoginPageProps = {
    updateToken: (e: string) => void;
};





class LoginPage extends React.Component<LoginPageProps, {}>{
    constructor(props: LoginPageProps) {
        super(props);
    };

    render() {

        return (
            <div>
                <h1>Login Page</h1>
                <Auth updateToken={this.props.updateToken}  />
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