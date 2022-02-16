// require('dotenv').config();
import { useState } from 'react';
import Navbar from './components/NavbarForm';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/AppointmentPage'
import TodoPage from './pages/TodoPage';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [user, setUser] = useState({});


  const update = (data: object): Function => {//this is the function that is passed down to the login page
    console.log(data, "ourdata");//console logging the data that is passed into the update function
    setUser(data);//state is updated
    return () => (null);//nameless function returning null matches the return type of the update function
  }
  console.log(user);
  return (
    <div>
      <Navbar />
      
      <LoginPage email="" password="" />
      <AppointmentPage client_name="" phone_number="" startDateTime="" note=""  />
      <TodoPage subject="" todo_item=""/>
    </div>
  );
}

export default App;
