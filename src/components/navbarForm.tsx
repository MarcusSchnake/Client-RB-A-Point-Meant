import React from 'react';
import {  Navbar,Nav, NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,DropdownItem, } from 'reactstrap';
import {} from 'reactstrap';



export default function NavBar() {

    return (
        <div>
            <Navbar color="blue"/>
            <Nav pills>
                <NavItem>
                    <NavLink
                        active
                        href="#"
                    >
                        Link
                    </NavLink>
                </NavItem>
                <Dropdown
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
                </Dropdown>
                <NavItem>
                    <NavLink href="#">
                        Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled
                        href="#"
                    >
                        Disabled Link
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

// <nav className="navbar" >   {/* className is a keyword that is used to add a class to an element */}
        //     <div className="container"> 
        //     <ul>
        //         <li>
        //             <a href="/LandingPage">Home</a>
        //         </li>
        //         <li>
        //             <a href="/TodoPage">Todo's</a>
        //         </li>
        //         <li>
        //             <a href="/AppointmentPage">Appointment</a>  
        //         </li>
        //     </ul>
        //     </div>
        // </nav>