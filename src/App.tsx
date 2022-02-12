import Navbar from './components/navbarForm';
import LandingPage from './pages/landingPage';
import LoginPage from './pages/loginPage';
import AppointmentPage from './pages/appointmentPage';
import TodoPage from './pages/todoPage';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
       <LoginPage update={() => ("string") }/>
      <AppointmentPage />
      <TodoPage /> 
      <p>hello work please</p>
    </div>
  );
}

export default App;
