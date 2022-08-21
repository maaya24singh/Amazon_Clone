import React,{useState, useEffect} from 'react';
import './Orders.css';
import {db} from './firebase';
import {useStateValue} from './StateProvider';
import Order from './Order';


function Orders(){
  const[{basket, user}, dispatch] = useStateValue();
  const[orders, setOrders] = useState();


   return(
     <div className='orders'>
         <h1>Your Orders</h1>
          <div className='orders_order'>
              {basket.map((item) => (
                <Order
                   id={item.id}
                   about = {item.about}
                   image = {item.image}
                   price = {item.price}
                   rating = {item.rating}
                />
              ))}
          </div>
     </div>
   );
}
export default Orders;
