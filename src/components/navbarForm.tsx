import React from 'react';
import {  Navbar,Nav, NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem, } from 'reactstrap';


export default function NavBar() {

    return (
        <div>
            <Navbar color="Red"/>
            <Nav pills>
                <NavItem>
                    <NavLink
                        active
                        href="http://localhost:3001/home"
                    >
                        APointMeant
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
                    <NavLink href="http://localhost:3001/appointment">
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

