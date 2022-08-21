import React,{useState} from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { MdShoppingBasket } from 'react-icons/md';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

const Header = () =>{
   const [{basket, user}, dispatch] = useStateValue();
   const[showMenu, setShowMenu] = useState(false);
   const onClickHandler = () =>{
     setShowMenu(!showMenu);
   }
   const handleAuthentication = () =>{
       if(auth){
         auth.signOut();
       }
   }
    return(
      <div className='header'>
        <Link to="/">
           <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
         </Link>
         <div className="header_section">
            <input className="header_searchInput" type="text"/>
            <FaSearch className="header_searchIcon"/>
         </div>

         <div className="header_nav">
             <Link to = {!user? "/login":""}>
                  <div className="header_option" onClick={handleAuthentication}>
                      <span className="header_optionLineOne">{user? user.email : "Hello Guest"}</span>
                      <span className="header_optionLineTwo">{!user? 'Sign In' : 'Sign Out'}</span>
                  </div>
              </Link>
              <div className="header_option">
                  <span className="header_optionLineOne">Returns</span>
                  <span className="header_optionLineTwo">& Orders</span>
              </div>
              <div className="header_option">
                  <span className="header_optionLineOne">Your</span>
                  <span className="header_optionLineTwo">Prime</span>
              </div>
         </div>
         <Link to = "/checkout">
             <div className="header_optionBasket">
                <MdShoppingBasket/>
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
             </div>
         </Link>

         <div className="menu_bar">
             <button type="button" name="button" className="menu-button" onClick={onClickHandler}>
                 <span className={showMenu?"button-top open-top" :"button-top"}></span>
                 <span className={showMenu?"button-mid open-mid" :"button-mid"}></span>
                 <span className={showMenu?"button-last open-last" :"button-last"}></span>
             </button>
         </div>

         {showMenu &&
           <div className={showMenu?"mobile-menu" :"mobile-menu hidden"}>
               <Link to = {!user? "/login":""}>
                    <div className="header_option menu_header" onClick={handleAuthentication}>
                        <span className="menu_header_optionLineOne">{user? user.email : "Hello Guest"}</span>
                        <span className="menu_header_optionLineTwo">{!user? 'Sign In' : 'Sign Out'}</span>
                    </div>
                </Link>
                <div className="header_option menu_header">
                    <span className="menu_header_optionLineOne">Returns</span>
                    <span className="menu_header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option menu_header">
                    <span className="menu_header_optionLineOne">Your</span>
                    <span className="menu_header_optionLineTwo">Prime</span>
                </div>
           </div>
        }
      </div>
    );
}
export default Header;
