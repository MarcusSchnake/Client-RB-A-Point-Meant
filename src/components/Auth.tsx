export {}

// import React from "react";
// import RegisterForm from "../components/RegisterForm";
// import LoginForm from "../Component/LoginForm";
// import { Container, Row, Col } from "reactstrap";

// type Props = {
//   updateToken: (e: string) => void;
// };

// type State = {
//   hasError: boolean;
// };

// class Auth extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       hasError: false,
//     };
//   }

//   static getDerivedStateFromError(error: any) {
//     return { hasError: true };
//   }

//   componentDidCatch(error: any, errorInfo: any) {
//     console.log(error, errorInfo);
//   }

//   render() {
//     console.log("Auth render");
//     if (this.state.hasError) {
//       return <h1>Error</h1>;
//     }
//     return (
//       <Container>
//         <Row>
//           <Col md="6">
//             <RegisterForm updateToken={this.props.updateToken} />
//           </Col>
//           <Col md="6">
//             <Login updateToken={this.props.updateToken} />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Auth;
