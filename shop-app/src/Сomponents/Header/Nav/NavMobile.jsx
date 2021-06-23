
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const NavMobile = ({open, setOpen}) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </StyledMenu>
  )
}
export default NavMobile;