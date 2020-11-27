import React from "react";
import './CheckoutProduct.css';
import {useStateValue} from "../../StateProvider";

export default function CheckoutProduct({id, title, price, image, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
         dispatch({
             type: "REMOVE_FROM_BASKET",
             id:id,
         });
    };

    return (
        <div className="checkoutProduct" key={id}>
            <img className="checkoutProduct__image" src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <b>£</b>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map(() => <p>⭐</p>)
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}
            </div>
        </div>
    )
}