import React from 'react';
import { NavLink } from 'react-router-dom';
import cartImg from './img/cart.svg';

const CartIcon = (props) => {
    return(
        <div className="header__cart">
            <NavLink to="/cart">
                <span className="cart-number">{props.productList.length}</span><img src={cartImg} alt="" />
            </NavLink>
        </div>
    )
}
export default CartIcon;