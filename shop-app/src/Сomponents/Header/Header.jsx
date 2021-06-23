import React from 'react';
// import {StyledHeader} from './Header.styled'
import CartIcon from './CartIcon'
import Burger from './Burger/Burger'
import { Link, NavLink } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import NavMobile from './Nav/NavMobile';

const Header = (props) => {
    return (
    <header className="header">   
        <div className="container">
            <div className="header__wrapper">
                
                <div className="header__top">
                    <Burger open={props.open} setOpen={props.setOpen} />
                    <div className="header__logo"><NavLink to="/"><i></i><span>Clay Shop</span></NavLink></div>
                    <div className="header__social">                   
                        <Link to={{ pathname: "https://www.instagram.com/"}} target="_blank" ><i className="ico ico-ig" /></Link>
                        <Link to={{ pathname: "https://twitter.com/"}} target="_blank"><i className="ico ico-tw" /></Link>
                        <Link to={{ pathname: "https://www.facebook.com/"}} target="_blank"><i className="ico ico-fa" /></Link>
                    </div>
                    <CartIcon productList={props.productList} />
                </div>
                
                <nav className="header__nav">
                    <Nav />
                </nav>
                <NavMobile open={props.open} setOpen={props.setOpen} /> 
            </div>
        </div>  
    </header> 
    )
}

export default Header;