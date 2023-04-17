import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    handleRemoveItem={handleRemoveItem}
                    product={product}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to="/">Shop Naw</Link>  </h2>
                }
            </div>
            <div className='cart-container'>
                {
                    <Cart clearCart={clearCart} cart={cart}>
                        
                    </Cart>
                }
                {
                    
                        <Link to='/shipping'>
                        <button className='btn-clear'>Shipping</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Order;