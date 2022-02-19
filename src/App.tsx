// require('dotenv').config();
// import React, { Fragment } from 'react';
import { ReactDOM, useState } from 'react';
// import Auth from './components/Auth';
import Navbar from './components/navbarForm';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/appointmentPage'
import TodoPage from './pages/todoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export interface  IUser {
  sessionToken: string;
  email: string;
}

function App() {
  const updateToken = (userData: IUser) => {
    localStorage.setItem('token', userData.sessionToken);
  };



  // const update = (data: object): Function => {//this is the function that is passed down to the login page
  //   console.log(data, "ourdata");//console logging the data that is passed into the update function
  //   setUser(data);//state is updated
  // return () => (null);//nameless function returning null matches the return type of the update function
  // };
  // console.log(user);

  if (window.location.pathname === '/logout') {
    (localStorage.removeItem('token'))
    window.location.pathname = '/login'
  }
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<LoginPage updateToken={updateToken} email="" password="" />}
        />
        <Route
          path="/login"
          element={<LoginPage updateToken={updateToken} email="" password="" />}
        />
        <Route
          path="/register"
          element={<LoginPage updateToken={updateToken} email="" password="" />}
        />
        {localStorage.getItem('token') && (
          <Route
            path="/user/login"
            element={<LoginPage updateToken={updateToken} email="" password="" />}
          />
        )};
        {localStorage.getItem('token') && (
          <>
            <Route
              path="/appointment"
              element={<AppointmentPage client_name="" phone_number="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/create"
              element={<AppointmentPage client_name="" phone_number="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/:id"
              element={<AppointmentPage client_name="" phone_number="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/delete/:id"
              element={<AppointmentPage client_name="" phone_number="" startDateTime="" note="" />}
            />
            <Route
              path="/appointment/update/:id"
              element={<AppointmentPage client_name="" phone_number="" startDateTime="" note="" />}
            />
            <Route
              path="appointment/get"
              element={<AppointmentPage client_name="" phone_number="" startDateTime="" note="" />}
            />
          </>
        )};
        {localStorage.getItem('token') && (
          <>
          <Route
            path="/todo"
            element={<TodoPage subject="" todo_item="" />}
          />
            <Route
              path="/todo/create"
              element={<TodoPage subject="" todo_item="" />}
            />
            <Route
              path="/todo/:id"
              element={<TodoPage subject="" todo_item="" />}
            />
            <Route
              path="/todo/delete/:id"
              element={<TodoPage subject="" todo_item="" />}
            />
            <Route
              path="/todo/update/:id"
              element={<TodoPage subject="" todo_item="" />}
            />
          </>
        )};
      </Routes>
    </Router>
  );
}

export default App;
