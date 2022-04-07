import React from 'react';
import {Divider, Menu, MenuItem} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {logo, burger} from "../../assets";
import './top-header.css'


const useStyles = makeStyles({
   divide: {
      display: "none",
      '@media (max-width: 790px)': {
         display: 'block'
      }
   }
})

const TopHeader = () => {
   const classes = useStyles()
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };


   return (
      <div className='top-header'  >
         <div className="container">
            <div className="top_header-row">
               <div className="left">
                  <img src={logo} alt="logo" style={{cursor: 'pointer', marginLeft: '10px'}}/>

                  <nav>
                     <div className="item not">Для бизнеса</div>
                     <div className='item'>Блог</div>
                     <div className='item'>О нас</div>

                     <div
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className='item'
                     >
                        Помощь
                        <ArrowBackIosNewIcon className={anchorEl === null ? 'arrow down ' : 'arrow down up'} style={{fontSize: 'small'}}/>
                     </div>
                     <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           'aria-labelledby': 'basic-button',
                        }}
                     >
                        <MenuItem onClick={handleClose} >Служба поддержки</MenuItem>
                        <MenuItem onClick={handleClose}>Вопросы и ответы</MenuItem>
                     </Menu>
                  </nav>

               </div>

               <div className="right">
                  <div className="language">RU</div>
                  <div className="registration">
                     <Divider orientation='vertical' flexItem/>
                     <div className="logIn">Войти</div>
                     <Divider orientation='vertical' flexItem/>
                     <div className='signIn'>Регистрация</div>
                     <Divider className={classes.divide} orientation={"vertical"} flexItem  />

                     <img
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        src={burger}
                        alt=''
                        className='burger'
                     />
                     <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                           'aria-labelledby': 'basic-button',
                        }}
                     >
                        <MenuItem onClick={handleClose} sx={{display: 'none', '@media (max-width: 525px)': {display: 'block'}}}>Для бизнеса</MenuItem>
                        <MenuItem onClick={handleClose}>Блог</MenuItem>
                        <MenuItem onClick={handleClose}>О нас</MenuItem>
                        <MenuItem onClick={handleClose}>Служба поддержки</MenuItem>
                        <MenuItem onClick={handleClose}>Вопросы и ответы</MenuItem>
                     </Menu>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopHeader;