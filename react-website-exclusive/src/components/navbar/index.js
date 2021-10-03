import React from 'react'
import { Nav, NavbarContainer, NavMenu, NavItem, NavLink } from './Navelements'


const Navbar = () => {
    return (

        <Nav>
            <NavbarContainer>
                
                <NavMenu>
                <NavItem>
                        <NavLink to="home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="contact">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="resume">Resume</NavLink>
                    </NavItem>
                </NavMenu>


            </NavbarContainer>
        </Nav>

    );
};

export default Navbar;
