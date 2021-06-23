import React from 'react'
import { Link } from 'react-router-dom';


class Cart extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            productCart : JSON.parse(localStorage.getItem("productCart")) || [],
            totalPrice : this.props.totalPrice || 0
        }
        this.deleteProductFromCart = this.deleteProductFromCart.bind(this);
    }
    async deleteProductFromCart(key, price) {
        
        await this.setState(prevState => ({
            productCart: prevState.productCart.filter((product, index) => index!==key)
        }))
        if (this.state.productCart.length!==0) {
            await localStorage.setItem("productCart", JSON.stringify(this.state.productCart));
            this.state.totalPrice =  (this.state.totalPrice-price).toFixed(2);           
            await localStorage.setItem("total", JSON.stringify(this.state.totalPrice));
            await this.props.setTotalPrice(this.state.totalPrice);
           
        } else { 
            // если очистили всю корзину
           await localStorage.removeItem("productCart");
           await localStorage.removeItem("total");
           this.props.setTotalPrice(0);
           await this.setState(()=> ({
            productCart: []
           }))
        //    this.props.setProductList(this.state.productCart);
        } 
        await this.props.setProductList(this.state.productCart);
    }
    render() {
        return(
            <>
        {this.state.productCart.length!==0 ? 
        <section className="cart-list product-list">
            <div className="container">
            <div className="cart-list__wrapper">
                <div className="cart-list__title">Cart</div> 
                                 
                    {this.state.productCart.map((item, index) => (
                        <div key={index} className="cart-list__item">
                        <div className="cart-list__item-img">
                        <Link to={'/product/' + item.id}><img src={item.image} alt="" /></Link></div>
                        <div className="cart-list__item-title">
                        <Link to={'/product/' + item.id}>{item.title}</Link></div>
                        <div className="cart-list__item-price">$ <span>{item.price}</span></div>
                        <div className="cart-list__item-delete"><i onClick={()=>this.deleteProductFromCart(index, item.price)} className="ico ico-delete"></i></div>
                        {/* оборачиваем в стрелочную функцию, чтобы функция сразу не вызывалась */}
                        </div>
                    ))}
                 
            </div>
            <div className="cart-list__total-price">
                <div>Total amount $ <span>{this.state.totalPrice}</span> </div>
            </div> 
               
        </div> 
        </section>
            : 
        <section className="cart-list product-list empty-cart">
            <div className="container">
            <div className="cart-list__wrapper">
                <div className="cart-list__title">Cart is empty</div> 
            </div>
            </div>
        </section>    
        }
        </>                
        )
    }
}

export default Cart;