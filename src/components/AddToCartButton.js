import React from 'react';
import { Button } from 'react-bootstrap';

const AddToCartButton = ({setShopCount }) => 
    <Button 
        onClick={() => setShopCount(prev => prev + 1)} 
        className="btn btn-primary btn-wide"
        name="Add to Cart">
            Add to Cart
    </Button>

export default AddToCartButton;
