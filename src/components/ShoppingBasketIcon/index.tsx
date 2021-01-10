import React from 'react';
import './Style.css';

interface ShoppingQuantityIconProp {
    value: number;
    color: string;
}

function ShoppingQuantityIcon({ value, color }: ShoppingQuantityIconProp) {    
    return (
        <div className="ShoppingQuantityBadge">
            <i
                className="fa fa-shopping-basket"
                style={{ color: color, fontSize: "2.15rem" }}
            >
            </i>
            
            <span> {value} </span>
        </div>
    )
}

export default ShoppingQuantityIcon;