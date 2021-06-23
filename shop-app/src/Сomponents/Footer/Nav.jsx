import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    // debugger
    return(
        <div className="footer-main__item">
            <h3>{props.title}</h3>
            <nav>
                <ul>                    
                    {props.menuLink.map((item, index) => (
                         <li key={index}>
                            <NavLink to={item}>{props.menuName[index]}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}


export default Nav;