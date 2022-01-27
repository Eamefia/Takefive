import React from 'react';
import "./Subtotal.css"
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
