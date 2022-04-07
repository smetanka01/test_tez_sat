import React from 'react';

import Header from "./components/header";
import Categories from "./components/categories";
import Products from "./components/products";
import Footer from "./components/footer";
import './style.css'


const App = () => {

   return (
      <>
         <Header/>
         <Categories/>
         <Products/>
         <Footer/>
      </>
   );
};

export default App;
