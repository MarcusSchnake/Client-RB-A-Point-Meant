import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';


export default function NavBar() {

    return (
        <div>
            <Navbar />
            <Nav pills>
                <NavItem>
                    <NavLink>
                        {!localStorage.getItem('token') && (
                            <Link to="/register">
                                Register/Login
                            </Link>
                        )}
                         {localStorage.getItem('token') && (
                            <Link to="/logout">
                                Log Out
                            </Link>
                        )}
                    </NavLink>
                </NavItem>
                  
                <NavItem>
                    <NavLink href="http://localhost:3001/register">
                        Appointment
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="http://localhost:3001/todo">
                        Todo's
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

