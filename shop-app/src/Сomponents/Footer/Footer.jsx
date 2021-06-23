
import React from 'react';
import { NavLink } from 'react-router-dom';
import Copy from './Copy';
import Nav from './Nav'


const Footer = ()=> {
    const menuArr = [
        {
            title: "Hot links",
            name: ["Home","Shop","Blog","Contact"],
            link: ["/", "/shop", "/","/"]
           
        },
        {
            title: "More info",
            name: ["How it works", "About us","Decline rules", "Terms & Conditions"],
            link: ["/", "/", "/", "/"]
       },
       {
            title: "Customer care",
            name: ["FAQ", "Terms of use","Privacy Policy"],
            link: ["/", "/", "/"]
        }

    ]
    return(
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-main__wrapper">
                        <div className="footer-main__item">
                            <div className="footer-logo">
                                <h3><NavLink to="/"><i></i><span>Clay Shop</span></NavLink></h3>
                            </div>
                            <p>Fashion is a popular 
                                aesthetic expression at a particular time, place and in a specific context, 
                                especially in clothing, footwear, lifestyle, accessories, makeup.</p>
                        </div>
                        {menuArr.map((item, index) => (
                            <Nav menuName={item.name} menuLink={item.link} title={item.title} key={index} />
                        ))}    
                     
                        
                    </div>
                </div>
                
            </div>     
            <div className="footer-social">
                <div className="container">
                    <Copy />
                </div>
            </div>    
        </footer>
    )
}

export default Footer;