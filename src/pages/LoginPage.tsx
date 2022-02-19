import React from 'react';
import { IUser } from '../App';
import Auth from '../components/Auth';


type LoginPageProps = {
    email: string;
    password: string;
};

class LoginPage extends React.Component<LoginPageProps, {}>{
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            hasError: false,
            email: "",
            password: ""
        };
    };

    render() {

        return (
            <div>
                                <Auth />
            </div>
        );

    }
}

export default LoginPage;