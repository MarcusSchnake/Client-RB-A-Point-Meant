import Navbar from './components/navbarForm';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/appointmentPage'
import TodoPage from './pages/todoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewAllAppointments from './components/ViewAllAppointments';
import UpdateAppointment from './components/UpdateAppointments';
import DeleteAppointment from './components/DeleteAppointment';
import UpdateTodo from './components/UpdateTodo';
import ViewAllTodo from './components/ViewAllTodo';
import DeleteToDo from './components/DeleteTodo';
import "./App.css"


export interface  IUser {
  sessionToken: string;
  email: string;
}

function App() {
  

  if (window.location.pathname === '/logout') {
    (localStorage.removeItem('token'))
    window.location.pathname = '/login'
  }
  return (

    <Router >
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage email="" password="" />}
        />
        <Route
          path="/register"
          element={<LoginPage email="" password="" />}
        />
        {localStorage.getItem('token') && (
          <Route
            path="/user/login"
            element={<LoginPage email="" password="" />}
          />
        )};
        {localStorage.getItem('token') && (
          <>
            <Route
              path="/appointment"
              element={<AppointmentPage client_name="" email="" phone="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/create"
              element={<AppointmentPage client_name="" email="" phone="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/delete/:id"
              element={<DeleteAppointment />}
            />
            <Route
              path="/appointment/:id"
              element={<AppointmentPage client_name="" email="" phone="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/update/:id"
              element={<UpdateAppointment />}
            />
            <Route
              path="appointment/getAll"
              element={ <ViewAllAppointments/>}
            />
          </>
        )};
        {localStorage.getItem('token') && (
          <>
            <Route
              path="/todo/create/:id"
              element={<TodoPage subject="" todo_item="" />}
            />
            <Route
              path="/todo/delete/:id"
              element={<DeleteToDo />}
            />
            <Route
              path="/todo/update/:id"
              element={<UpdateTodo />}
            />
            <Route 
              path="/todo/getAll/:id"
              element={<ViewAllTodo />}
            />
          </>
        )};
      </Routes>
    </Router>
  );
}

export default App;
