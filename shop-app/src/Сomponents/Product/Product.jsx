import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';


const Product = (props) => {
    // debugger
    let { id } = useParams();  //get id from URL
    let productId = + {id}.id;   
    const [catalog, setCatalog] = useState(JSON.parse(localStorage.getItem("productCatalog")) || "");
    const [newProdArr, setNewProdArr] = useState([]); 
    useEffect(() => {
        
        const filterArr = catalog.filter((item, index) => item.id=== productId);       
        setNewProdArr(filterArr);        

    }, [productId]); 
    // , {id}
    return ( 
        //добавить проверку на пустоту       
    <section className="product">
        <div className="container">
        {newProdArr.map((item, index) => (
            <div className="product__wrapper" key={index}>
            
                <div className="product__info-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="product__info">
                    <h2>{item.title}</h2>
                    <div className="product__info-review">
                        <div className="starts-rating">
                            <i className="ico ico-stars-active"></i>
                            <i className="ico ico-stars-active"></i>
                            <i className="ico ico-stars-active"></i>
                            <i className="ico ico-stars-active"></i>
                            <i className="ico ico-stars"></i>
                        </div>
                        <p>132 reviews</p>
                    </div>
                    <p className="product__info-desc">{item.description}</p>

                    <div className="product__info-footer">
                        <div className="product__info-price">$ <span>{item.price}</span></div>
                        <NavLink to="/cart" className="btn btn-pink-active" onClick={() => props.AddProductToCart(item)}>Shop now</NavLink>
                        <button className="btn btn-pink" onClick={() => props.AddProductToCart(item)}>Add to cart</button>
                    </div>  
                     
                </div>
                
            </div>
            ))}
        </div>
    </section>
    )
}

export default Product;