
import React from 'react';

const Collection = ()=> {
    return(
        <section className="collections">
            <div className="container">
                <div className="collections__wrapper">
                <div className="collections__women">
                    <h2>Women<br/> Collection</h2>
                    <p>Spring 2020</p>
                    <div><button className="btn btn-small btn-white-bg">Popular</button></div>
                </div>
                <div className="collections__bestsellers">
                    <p>24 items</p>
                    <h2>Bestsellers</h2>
                </div>
                <div className="collections__dresses">                    
                    <div><button className="btn btn-small btn-white-bg">New</button></div>
                    <h2>Dresses</h2>
                </div>
                <div className="denim__jackets">
                    <div><button className="btn btn-small btn-white-bg">New</button></div>
                    <h2>Denim Jackets</h2>
                </div>
                </div>
            </div>
        </section>    
    )
}

export default Collection;