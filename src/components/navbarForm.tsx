import React from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav, NavItem, NavLink } from 'reactstrap';


export default function NavBar() {

    return (
        <div>
            <Navbar/>
            <Nav pills>
                <NavItem>
                    <NavLink>
                        <Link to="/register">

                        Register/Login</Link>
                    </NavLink>
                </NavItem>
                {/* <Dropdown
                    nav
                    toggle={function noRefCheck() { }}
                >
                    <DropdownToggle
                        caret
                        nav
                    >
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>
                            Header
                        </DropdownItem>
                        <DropdownItem disabled>
                            Action
                        </DropdownItem>
                        <DropdownItem>
                            Another Action
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Another Action
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
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

