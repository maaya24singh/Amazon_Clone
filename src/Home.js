import React from 'react';
import './Home.css';
import Product from './Product';


function Home(){
   return(
     <div className='home'>
        <div className="home_container">
              <img className="home_image"
              src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
              alt="image"/>
             <div className="home_col">
                  <div className="home_row">
                     <Product id={1} about="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone" price={15} rating={4} image={"https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"}/>
                     <Product id={2} about="ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4, Thunderbolt 4, Windows 11 Home, Off Black, FX517ZM-AS73" price={74} rating={4} image={"https://m.media-amazon.com/images/I/71AGOX9MORL._AC_SX466_.jpg"}/>
                  </div>
                  <div className="home_row">
                       <Product id={3} about=" Traction: Get a Grip on Your Business " price={23} rating={3} image={"https://images-na.ssl-images-amazon.com/images/I/412-zYCkAWL._SX331_BO1,204,203,200_.jpg"}/>
                       <Product id={4} about="Targeal 4 Mode 7.1 Surround Sound PC Gaming Headset for PS4/5 Laptop Tablet Mobile, On Ear Wired USB Gaming Headphones, Omni-Directional Noise Reduction Microphone" price={19} rating={4} image={"https://m.media-amazon.com/images/I/61EH7lsYIDL._AC_SX466_.jpg"}/>
                       <Product id={5} about="Mr. Coffee 2129512, 5-Cup Mini Brew Switch Coffee Maker, Black" price={34} rating={4} image={"https://m.media-amazon.com/images/I/41ppcO7H0WL._AC_UL320_.jpg"}/>
                  </div>
                  <div className="home_row">
                      <Product id={6} about="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301" price={349} rating={4} image={"https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_UL320_.jpg"}/>
                      <Product id={7} about="TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model" price={148} rating={3} image={"https://m.media-amazon.com/images/I/61--xSgNcQL._AC_UY218_.jpg"}/>
                  </div>
              </div>
        </div>
     </div>
   );
}
export default Home;
