import React from 'react';
import { NavLink } from 'react-router-dom';


const Banner =() => {
    return(
    <section className="banner">
        <div className="container">
            <div className="banner__wrapper">
                <h1>Admire Stylish <br />
                    Dresses	&amp; Looks</h1>
                <p>If we wanted to build a human-level tool to offer 
                    automated outfit advice, we needed to understand 
                    people’s fashion taste. </p>    
                <div><NavLink to="/shop" className="btn btn-white"><span>Show more</span></NavLink></div> 
                {/* CODE!!!!!! */}
            </div>
        </div>
    </section>
    )
}

export default Banner;