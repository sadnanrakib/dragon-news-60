import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarsul = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-client-module-60/main/src/assets/brands/Brand2.png"
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-client-module-60/main/src/assets/brands/Brand1.png"
          alt="Second slide"
        />

      </Carousel.Item>
      
    </Carousel>
        </div>
    );
};

export default BrandCarsul;