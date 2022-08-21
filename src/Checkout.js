import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';

function Checkout(){
  const [{basket, user}, dispatch] = useStateValue();

   return(
     <div className='checkout'>
         <div className='checkout_left'>
               <img
                 className="checkout_ad"
                 src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                 alt="img"/>

                <div>
                   <h4>Hello, {user? user.email : "Guest"}</h4>
                   <h2 className="checkout_title"> Your Shopping Basket</h2>
                   {basket.map((item) => (
                     <CheckoutProduct
                        id={item.id}
                        about = {item.about}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                     />
                   ))}
                </div>
         </div>
         <div className="checkout_right">
            <Subtotal/>
         </div>
     </div>
   );
}
export default Checkout;
