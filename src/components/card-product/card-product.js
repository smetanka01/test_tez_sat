import React, {useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {geo} from "../../assets";

import './card-product.css'

const CardProduct = ({description, price, photo}) => {
   const [favorite, setFavorite] = useState(false)
   const mil = 1000000
   const toggleFavorite = () => {
      setFavorite(!favorite)
   }

   const million = (number) => {
      let arr = ("" +number).split("").map(Number)
      if (number > 1000000000){
         arr.splice(arr.length-9,arr.length-1)
         return `${arr.join('')} млрд`
      } else if (number > 1000000){
         arr.splice(arr.length-6,arr.length-1)
         return `${arr.join('')} млн`
      }
   }

   return (
      <div className='card-product'>
         <img className='card-img' src={photo} alt=""/>
         <div className="main">
            <div className="title">
               <div className="price">{price > mil ? million(price) : (price).toLocaleString()} <span>сом</span></div>
               <div onClick={toggleFavorite}>{favorite ? <FavoriteIcon style={{color: '#FFCB05'}}/> : <FavoriteBorderIcon style={{color: '#FFCB05'}}/>}</div>

            </div>
            <div className="text">
               {description.length > 40 ? description.slice(0, 40) + '...' : description}
            </div>
            <div className="geo">
               <img src={geo} alt="icon" style={{marginRight: '8px'}}/>
               г. Бишкек, Чуйская область
            </div>
         </div>
      </div>
   );
};

export default CardProduct;