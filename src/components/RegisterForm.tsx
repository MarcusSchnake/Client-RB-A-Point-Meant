import React from "react";
import LoginForm from '../components/loginForm';

type RegisterFormProps = {
    updateToken: (e: string) => void;
    email: string;
    password: string;
    setEmail: (e: string) => void;
    setPassword: (e: string) => void;

};

type RegisterFormState = {
   
};

//
class RegisterForm extends React.Component<RegisterFormProps, RegisterFormState> {
    constructor(props: RegisterFormProps) {
        super(props);
    }
    render() {
        return (
            <div>
            </div>
        )
    }
};


export default RegisterForm;