import React from "react";
import "./Subtotal.css";
import CurrencyFormat from 'react';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';
import {useHistory} from 'react-router-dom';

function Subtotal(){
  const history = useHistory();
 const [{basket}, diapatch] = useStateValue();
 const currentFormat = () =>{

 }

    return(
      <div className="subtotal">

                  <p>
                     Subtotal ({basket?.length} items):
                     <strong> $ {getBasketTotal(basket)}</strong>
                  </p>
                  <small className="subtotal_gift">
                    <input type="checkbox"/>This order contains gift
                  </small>


          <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
      </div>
    );
}
export default Subtotal;
