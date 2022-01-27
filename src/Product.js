import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const addBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };
    return (
        <div className="product">
         <div className="product__info">
          <p>{title}</p>
        </div>
           <Link to={{
            pathname: "/product",
                    state: {
                        name: title,
                        pic: image
                    }
                }}>
              <img className="pro__img" src={image} alt="hello" />
           </Link>
            
            <div className="price__btn">
              <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
              <button onClick={addBasket}>Pre-Oder</button>
            </div>
            
        </div>
    )
}

export default Product
