import React from 'react';
import "./Product_details.css";
import { useLocation } from "react-router-dom";

function Product_details() {
  const location = useLocation();
  const {name} = location.state;
  const {pic} = location.state;
    return (
        <div className='product__details'>
            <div className='product__details__all container'>
              <div className='product__details__images ms-4 me-4'>
                 <img src={pic}/>
              </div>
              <div className='mt-5 product__details__specs ms-4 me-4'>
                <p>{name}</p>
                <p>520 cal | Low Calorie</p>
                <strong>$609.99</strong> <br />
                <button className="addlist mt-2 mb-5">Order</button>
                <p>Delivery in 25 minutes within Tech environs</p>
                <div className='product__details__specs__others'>
                   <p>DETAILS ABOUT THIS MEAL</p>
                   <p>ENERGY (KCAL) - 520, Carbs (g) -90.4, Protein (g) - 16.6, Fat (g) -10.6 , Fiber (g) - 2.4, Sodium, Na (mm) -1,330.00 Sugar(g) - 0 
                     Comfort food at its best, our bowl of American Lo Mein is just the umami kick you are looking for! Fresh assorted veggies 
                     and steaming-hot noodles straight out of the boiling pot are tossed in a 
                     sweet and hot Teriyaki-based sauce. All our bowls are prepared fresh on your order.</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Product_details
