import React from 'react';
import {googlePlay, appStore, logo} from "../../assets";
import {insta, twitter, youTube, VK, OK, whatsApp, facebook, telegram} from "../../assets";

import './footer.css'

const Footer = () => {
   return (
      <div className='footer'>
         <div className="container">
            <div className="footer-inner">
               <div className="first">
                  <div className="footer_title">Tez Sat</div>
                  <div className="first_text">Tez Sat (Тез Сат) - это сервис бесплатных объявлений Кыргызстана.Сервис позволяет подавать бесплатные объявления о купле, продаже, аренде, обмене как б/у, так и новых товаров и услуг. Продажа авто, домов, квартир, электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.</div>
               </div>
               <div className="second">
                  <div className="footer_title">Узнать больше</div>
                  <div className="second_block">
                     <div>служба поддержки</div>
                     <div>карта сайта</div>
                     <div>о нас</div>
                     <div>помощь</div>
                     <div>пользовательское решение</div>
                  </div>
               </div>
               <div className="third">
                  <div className="footer_title">Скачать приложение</div>
                  <img className='application first' src={googlePlay} alt=""/>
                  <img className='application' src={appStore} alt=""/>
               </div>
            </div>

            <hr className='footer_line'/>

            <div className="copyright">
               <img src={logo} alt=""/>
               <div className='end_text'>© 2021 Все права защищены</div>
               <div className="messengers">
                  <div className="messenger_block"><img className='mess_img' src={telegram} alt=""/></div>
                  <div className="messenger_block"><img className='mess_img' src={whatsApp} alt=""/></div>
                  <div className="messenger_block"><img className='mess_img' src={insta} alt=""/></div>
                  <div className="messenger_block"><img className='mess_img' src={youTube} alt=""/></div>
                  <div className="messenger_block"><img className='mess_img' src={VK} alt=""/></div>
                  <div className="messenger_block"><img className='mess_img' src={OK} alt=""/></div>
                  <img src={facebook} alt=""/>
                  <img src={twitter} alt=""/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;