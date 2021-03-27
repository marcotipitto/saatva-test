import React from 'react';
import { Carousel } from 'react-bootstrap';

const MattressCarousel = ({mattresses, selectedMattress}) => 
    <Carousel 
        activeIndex={mattresses.findIndex(mattress => mattress.name === selectedMattress.name)} 
        controls={false}
        indicators={false}>
        {mattresses.map(mattress => 
            <Carousel.Item key={mattress.name}>
                <img
                    className="d-block w-100"
                    src={`/${mattress.imageFileName}`}
                    alt={mattress.name}
                />
            </Carousel.Item>
        )}
    </Carousel>

export default MattressCarousel