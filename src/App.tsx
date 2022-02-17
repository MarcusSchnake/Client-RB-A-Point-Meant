// require('dotenv').config();
import { useState } from 'react';
import Navbar from './components/navbarForm';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/appointmentPage'
import TodoPage from './pages/todoPage';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const updateToken = (tokenSTR: string) => {
    setToken(tokenSTR);
    localStorage.setItem('token', tokenSTR);
  };

  // const update = (data: object): Function => {//this is the function that is passed down to the login page
  //   console.log(data, "ourdata");//console logging the data that is passed into the update function
  //   setUser(data);//state is updated
    // return () => (null);//nameless function returning null matches the return type of the update function
  // };
  console.log(user);
  return (
    <div>
      <Navbar />
      
      <LoginPage updateToken={updateToken} />
      <AppointmentPage client_name="" phone_number="" startDateTime="" note=""  />
      <TodoPage subject="" todo_item=""/>
    </div>
  );
}

export default App;
