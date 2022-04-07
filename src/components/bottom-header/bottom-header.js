import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import './bottom-header.css'

const BottomHeader = () => {
   return (
      <div className='bottom-header'>
         <div className="container">
            <div className="row">
               <form className='form' action="" >
                  <input type="text" className="input" placeholder='Поиск...'/>
                  <button className='form btn'>Найти</button>

                  <button className='search btn'><SearchIcon sx={{position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/></button>
               </form>
               <button className='btn'>Подать объявление</button>
            </div>

         </div>
      </div>
   );
};

export default BottomHeader;