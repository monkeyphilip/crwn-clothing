import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className= 'cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHEACKOUT</CustomButton>
    </div>
);

export default CartDropdown;