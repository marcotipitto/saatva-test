import React, { useState } from 'react';
import MattressCarousel from './MattressCarousel';
import MattressDetail from './MattressDetail';
import AddToCartButton from './AddToCartButton';

const Body = ({ setShopCount, mattresses }) => {
    const [selectedMattress, setSelectedMattress] = useState(mattresses[0]);

    return (
        <div className="row flex-row-reverse body">
            <div className="col-md-6">
                <MattressDetail 
                    mattresses={mattresses} 
                    selectedMattress={selectedMattress}
                    setSelectedMattress={setSelectedMattress}
                    setShopCount={setShopCount} />
            </div>
            <div className="col-md-6">
                <MattressCarousel 
                    mattresses={mattresses} 
                    selectedMattress={selectedMattress} />
            </div>
            <div className="col-md-6 body-btn">
                <AddToCartButton setShopCount={setShopCount}/>
            </div>
        </div>
    );
}

export default Body;