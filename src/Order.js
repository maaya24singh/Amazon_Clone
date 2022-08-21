import React from 'react';
import './Orders.css';
import moment from 'moment-js';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';

function Order({id, image, about, price, rating}){
  const [{basket}, dispatch] = useStateValue();
  const d = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let month = months[d.getMonth()];
 const removeFromBasket = () =>{
   dispatch({
     type:"REMOVE_FROM_BASKET",
     id: id,
   })
 }

    return(
      <div className='order'>
        <div className='order_details'>
           <h3>Your Order List</h3>

           <div className='order_time'>
                 <p>
                    <spam>{month} {d.getDate()}th {d.getFullYear()} </spam>
                 </p>
                 <p>
                     <spam>{d.getHours()} : {d.getSeconds()}</spam>
                 </p>
           </div>
        </div>

        <div className='order_container'>
           <img className='order_image' src={image}/>
           <div className='order_info'>
              <p className='order_title'>{about}</p>
              <p className='order_price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className='order_rating'>
                  {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>
            </div>
        </div>
        <p className="order_total">
           Order Total ({basket?.length} items):
           <strong> $ {getBasketTotal(basket)}</strong>
        </p>
      </div>
    );
}
export default Order;
