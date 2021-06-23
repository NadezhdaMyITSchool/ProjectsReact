// App.js
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import './Media.css';
import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './global';
import { theme } from './theme';
import {getProducts} from './api';
import { Header, Banner, Catalog, Cart, Product, Slider, Collection, Footer } from './Сomponents'
import ErrorNew from './Error';


const App = () => {
  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem("productCart")) || []);
  const [totalPrice, setTotalPrice] = useState(+JSON.parse(localStorage.getItem("total")) || 0);
  const AddProductToCart =(data) => {    
    setTotalPrice(totalPrice + data.price);
    localStorage.setItem("total", JSON.stringify(totalPrice + data.price));
    setProductList([data, ...productList]);
    localStorage.setItem("productCart", JSON.stringify([data, ...productList]));
    
  }

  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    getProducts(); //ComponentDidMount 
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <BrowserRouter>
        <div className="page">
       
          <Header productList={productList} open={open} setOpen={setOpen}/>
          <Route exact path="/">
              <Banner />
              <Collection />
              <Slider />
          </Route>  
         
          
          <Route path="/shop" >
            <Catalog AddProductToCart={AddProductToCart}/>
          </Route>
          <Route path="/cart">
            <Cart setProductList={setProductList} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
          </Route>
          <Switch>
          <Route path='/product/:id' children={<Product AddProductToCart={AddProductToCart}/>} />         
          
          </Switch>
          {/* <Route path='/product/:*' component={<Error error="1" />} /> */}           
          
          <Route path="/contact"><ErrorNew error="1" /></Route>
          <Route path="/blog"><ErrorNew error="1" /></Route>
          <Footer />
        </div>
        
      </BrowserRouter>
    </ThemeProvider>
    



//  {/* <BrowserRouter> */}
 
 
//  {/* </BrowserRouter> */}
// <>
 

//   
//   <div>
//   <div>
//     {/* <Burger open={open} setOpen={setOpen} />
//     <Menu open={open} setOpen={setOpen} /> */}
    
//   </div>
//   </div>

   
  );
}
export default App;

