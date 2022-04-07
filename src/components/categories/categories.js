import React from 'react';
import {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {electronic, transport, realEstate, things, home} from '../../assets'
import {setCategory} from "../../redux/actions/categories";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import './categories.css'


const categories = [
   {category: 'Электроника', categoryImg: electronic, type: 'electronics'},
   {category: 'Транспорт', categoryImg: transport, type: 'transport'},
   {category: 'Недвижимость', categoryImg: realEstate, type: 'realEstate'},
   {category: 'Вещи', categoryImg: things, type: 'things'},
   {category: 'Всё для дома', categoryImg: home, type: 'home'}
]

const Categories = () => {
   const dispatch = useDispatch()
   const storeCategories = useSelector(({categories}) => categories.category)

   const [visiblePopup, setVisiblePopup] = useState(false)
   const sortRef = useRef()

   const onSelectCategory = (type) => {
      dispatch(setCategory(type))
      setVisiblePopup(false)
   }
   const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }
   const handleOutsideClick = (e) => {
      if (!e.path.includes(sortRef.current)) {
         setVisiblePopup(false)
      }
   }

   useEffect(() => {
      document.body.addEventListener("click", handleOutsideClick)
   }, [])

   return (
      <div className='categories gray'>
         <div className="container">
            <h2>Главные категории</h2>

            <div className='row_categories'>
               {categories.map((item, index) => (
                  <div
                     className="category"
                     key={`${item}_${index}`}
                     style={{background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(${item.categoryImg}) no-repeat center #0000004D`}}
                     onClick={() => onSelectCategory(item.type)}
                  >
                     {item.category}
                  </div>
               ))}
            </div>

            <div ref={sortRef} className='category_two'>
               <div
                  className='item blue'
                  onClick={toggleVisiblePopup}
               >Все категории <ArrowBackIosNewIcon className={visiblePopup === false ? 'arrow down ' : 'arrow down up'}
                                                   style={{fontSize: 'initial'}}/>
               </div>

               {visiblePopup && (<div className="sort_popup">
                  <ul>
                     {categories.map((item, i) => (
                        <li
                           className={item.type === storeCategories ? 'category_active' : ''}
                           key={`${item.category}_${i}`}
                           onClick={() => onSelectCategory(item.type)}
                        >
                           {item.category}
                        </li>
                     ))}
                  </ul>
               </div>)}
            </div>
         </div>
      </div>
   );
};

export default Categories;