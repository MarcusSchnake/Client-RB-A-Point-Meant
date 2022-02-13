import { useState } from 'react';
import Navbar from './components/NavbarForm';
import LandingPage from './pages/LandingPage';
import LoginForm from './components/LoginForm';
import AppointmentForm from './components/AppointmentForm';
import TodoPage from './pages/TodoPage';




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
      <LandingPage />
      <LoginForm update={(data: Object): Function => update(data)} />
      <AppointmentForm />
      <TodoPage />
    </div>
  );
}

export default App;
