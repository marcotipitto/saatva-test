import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

const MattressShop = () => {
    const [shopCount, setShopCount] = useState(0);
    const mattressesObj = {
        "classic": {
            "name": "Saatva Classic",
            "price": 999,
            "reviewRating": 4.9,
            "imageFileName": "classic-carousel.jpg"
        },
        "loom": {
            "name": "Loom & Leaf",
            "price": 1299,
            "reviewRating": 4.0,
            "imageFileName": "loom-carousel.jpg"
        },
        "zen": {
            "name": "Zenhaven",
            "price": 1599,
            "reviewRating": 4.5,
            "imageFileName": "zen-carousel.jpg"
        }
    }
    // Turn the mattresses object into an array so its easier to handle;
    const mattresses = Object.values(mattressesObj);

    return (
        <div>
            <Header shopCount={shopCount}/>
            <Body setShopCount={setShopCount} mattresses={mattresses}/>
        </div>
    )
}

export default MattressShop