import React from 'react';
import './CarInfoComponent.css'; // Import your CSS file for styling

const CarInfoComponent = ({ car }) => {
  return (
    <div className="car-info-container">
      <div className="car-image">
        <img src={car.image} alt="Car" />
      </div>
      <div className="car-details">
        <ul>
          {car.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <ul>
          {car.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarInfoComponent;