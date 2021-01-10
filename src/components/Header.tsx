import React from 'react';
import ShoppingBasketIcon from './ShoppingBasketIcon';
import useWebAnimation from '@wellyshen/use-web-animations';
import { useHistory } from "react-router-dom";
//REDUX_TOOLKIT
import { useSelector } from 'react-redux';
import { selectBasket } from '../toolkit/basketSlice';

function Header() {
    const basket = useSelector(selectBasket);

    let eachQuantity = basket.map(item => item.quantity);                //grap each 'quantity' from all objects
    let sumEachQuantity = eachQuantity.reduce((sum, num) => sum + num);  //reduce returns 'sum' of an array

    const { ref } = useWebAnimation({
        keyframes: [
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' },
            { transform: 'scale(1)' },
        ],
        timing: {
            duration: 3000,
            iterations: Infinity
        }
    })

    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-md sticky-top" id="shade">
            <div className="container">
                <span className="navbar-brand" id="title"> Cric Basket </span>

                <span onClick={() => history.push('/basket')} ref={ref}>
                    <ShoppingBasketIcon
                        value={sumEachQuantity}
                        color="white"
                    />                    
                </span>
            </div>
        </nav>
    )
}

export default Header;