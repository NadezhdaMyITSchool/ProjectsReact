import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Catalog =(props) => {
    const [catalog, setCatalog] = useState(JSON.parse(localStorage.getItem("productCatalog")) || "");    
    return (
        <section className="product-list">
        <div className="container">   
        {catalog ?      
            <div className="product-list__wrapper">             
                    
                {catalog.map((item, index) => (
                
                <div className="product-list__item" key={index}>
                    <div className="product-list__item-img" style={{backgroundImage: `url(${item.image})`}}>
                        {/* <img src={item.image} alt="" /> */}
                    </div>
                    <div className="product-list__item-title"><Link to={'/product/' + item.id}>{item.title.slice(0,30)}</Link></div>
                    <div className="product-list__item-desc">{item.description.slice(0,100)}...</div>
                    <div className="product-list__item-bot">
                        <div className="product-list__item-price">$ <span>{item.price}</span></div>
                        <div className="product-list__item-buy">
                            <button className="btn btn-pink" onClick={() => props.AddProductToCart(item)}>Add</button>
                            </div>
                    </div>
                </div>
                ))}
           </div>     
        : 
           <div className="product-list__wrapper">Catalog is empty.</div>
        }
        </div>
        </section>        
    )
}

export default Catalog;