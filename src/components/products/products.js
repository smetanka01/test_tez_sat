import React from 'react';
import {FormControlLabel, Switch} from "@mui/material";

import './products.css'
import {CardProduct, ProductSkeleton} from "../card-product";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/actions/products";

const Products = () => {
   const dispatch = useDispatch()
   const productItems = useSelector(({products}) => products.items)
   const categories = useSelector(({categories}) => categories.category)
   const loaderProduct =useSelector(({products}) => products.isLoaded)
   console.log(loaderProduct)

   React.useEffect(() => {
      dispatch(getProducts())
   }, [])

   return (
      <div className='products gray'>
         <div className="container">
            <div className="title">
               <div className="text">Новые объявления</div>
               <FormControlLabel labelPlacement='start' control={<Switch defaultChecked/>} label="Business" style={{marginLeft: 0}}/>
            </div>
            <div className="cards-row">
               {loaderProduct
                  ? productItems.map(obj => categories === 'all' ? <CardProduct key={obj.id} {...obj}/> : obj.category === categories ? <CardProduct key={obj.id} {...obj} /> : false)
                  : Array(12)
                     .fill(0)
                     .map((_,index) => <ProductSkeleton key={index} />)
               }
            </div>
         </div>
      </div>
   );
};

export default Products;