import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import Navbar from './NavbarForm';


export default function NavbarSticky() {
    
    return (
        <nav className="navbar">   {/* className is a keyword that is used to add a class to an element */}
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/AppointmentPage">Appointment</a>  
                </li>
            </ul>
        </nav>
        
    );
    
};