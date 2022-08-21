import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, about, price, rating, image}){
    const [{basket} , dispatch] = useStateValue();
    const addToBasket = () => {
       dispatch({
          type:'ADD_TO_BASKET',
          item:{
            id: id,
            about: about,
            image: image,
            price: price,
            rating: rating
          },
       })
    }

   return(
     <div className="product">
         <div className="product_info">
             <p className="product_about">{about}</p>
             <p className="product_price">
                  <small>$</small>
                  <strong>{price}</strong>
             </p>
             <div className="product_rating">
                {Array(rating).fill().map((_, i) => (
                  <p>⭐</p>
                ))}
             </div>
         </div>
         <img className=""
           src={image}
           alt="image"
         />
         <button onClick={addToBasket}>Add to Basket</button>
     </div>
   );
}
export default Product;
