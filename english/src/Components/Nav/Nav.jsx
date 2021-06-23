import React from 'react';
import Logo from './Logo';
import {NavLink} from 'react-router-dom';


const Nav = ({level}) => {
    return (
        <aside>
           <Logo level={level} />
            <nav className="nav">
                <ul className="nav-container">
                    <li><NavLink to="/library">Library</NavLink></li>
                    <li><NavLink to="/training">Training</NavLink></li>
                    <li><NavLink to="/learn">Learn</NavLink>  </li>                  
                </ul>
            </nav>
        </aside> 
    )
}
export default Nav;