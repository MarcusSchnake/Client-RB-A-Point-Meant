import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";


type Props = {
  update:(data:Object) => Function;
  
};

type State = {
  email: string;
  password: string;
  
  
};

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "", 
    };
  }

  handleSubmit = () => {
    console.log("login handle");
    console.log(this.state.email, this.state.password);
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        users: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(this.props.update);
        // this.props.update(data.sessionToken);
        this.props.update(data);
      });
  };

  render() {
   
    return (
      <div>
        <h3>Login</h3>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <FormGroup floating>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </FormGroup>

          <FormGroup floating>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}





export default Login;



//export{}
// import React from 'react';


// interface ILogin {
//   email: string,
//   password: string,
// };

// const LoginButton(props: ILogin) {
//   onSubmit: (username: string, 
//     password: string) => void;
// };


// export default function Login  () {
//     return (
//       <div>
//           <h1>Login</h1>
//           <LoginButton button onClick={() => {} }>Login</LoginButton>
          
        
//       </div>
//     );
// };