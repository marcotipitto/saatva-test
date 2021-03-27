import React from 'react';
import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import StarPicker from 'react-star-picker';

const MattressDetail = ({
    mattresses, 
    selectedMattress, 
    setSelectedMattress,
    setShopCount
}) => {
    
    const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <>
            <h2 className="title">Choose Your Mattress</h2>
            <p className="select-prompt">SELECT MATTRESS TYPE</p>
            <ButtonGroup toggle className="btn btn-wide">
                {mattresses.map(mattress => (
                    <ToggleButton
                        key={mattress.name}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={mattress}
                        checked={selectedMattress.name === mattress.name}
                        onChange={() => setSelectedMattress(mattress)}
                        className="btn btn-secondary"
                    >
                        {mattress.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <div className="mattress-details">
                <p className="align-left">{selectedMattress.name}</p>
                <p className="align-right">${numberWithCommas(selectedMattress.price)}</p>
                <div className="clear"></div>
                <p className="align-left">Review Rating: {selectedMattress.reviewRating} / 5</p>
                <StarPicker
                    className="align-right"
                    value={selectedMattress.reviewRating}
                    halfStars={true}
                    disabled={true} 
                    size={25}/>
                <div className="clear"></div>
            </div>
            <Button 
                onClick={() => setShopCount(prev => prev + 1)} 
                className="btn btn-primary btn-wide"
                name="Add to Cart">
                    Add to Cart
            </Button>
        </>
    )
}

export default MattressDetail;