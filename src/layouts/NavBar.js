import React,{useState,useContext} from 'react'
import {
    Navbar,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarText,
    

} from "reactstrap";

import {Link} from "react-router-dom";
import {UserContext} from "../context/context";

const Header =()=> {

    const context =useContext(UserContext);

    const [isopen ,setIsOpen] =useState(false);
    const toggle =()=>setIsOpen(!isopen);
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to ="/" className="text-white">FOOD RECIPIE APP</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ""  
                }
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse  isOpen={isopen} navbar>
            <Nav className="ml-auto" navbar>
                {
                    context.user ? 
                    (
                        <NavItem>
                            <NavLink onClick={()=>{context.setUser(null)}} className="text-white">Logout</NavLink>
                        </NavItem>
                    ) : (
                        <>
                        <NavItem>
                            <NavLink tag={Link} to="/signUp" className="text-white">SIgnUp </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/signIn" className="text-white">SIgnIn </NavLink>
                        </NavItem>
                        </>
                    )
                }                                
            </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;