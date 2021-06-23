import React from 'react';
import { Link } from 'react-router-dom';

const Copy = ()=> {
    return(
        <div className="footer-social__wrapper">
            <div className="foooter-social__copy">&copy; Clay Shop all rights reserved</div>
            <div className="footer-social__icon">
            <Link to={{ pathname: "https://www.instagram.com/"}} target="_blank" ><i className="ico ico-ig" /></Link>
            <Link to={{ pathname: "https://twitter.com/"}} target="_blank"><i className="ico ico-tw" /></Link>
            <Link to={{ pathname: "https://www.facebook.com/"}} target="_blank"><i className="ico ico-fa" /></Link>
            </div>
        </div>
    )
}


export default Copy;