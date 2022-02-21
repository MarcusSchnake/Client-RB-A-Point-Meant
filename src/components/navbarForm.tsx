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
            </Nav>
        </div>
    );
};

