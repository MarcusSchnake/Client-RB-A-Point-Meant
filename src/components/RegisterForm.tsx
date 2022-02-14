import LoginForm from './LoginForm';

export default function RegisterForm(){

    return (
        <LoginForm endPoint="register" update={ ( ) => console.log} />
    )
};

