import LoginForm from '../components/loginForm';

export default function RegisterForm(){

    return (
        <LoginForm endPoint="register" update={ ( ) => console.log} />
    )
};

