import React from 'react';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';

function Rating({ value, text }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return (
      <span key={index}>
        {value >= index + 1 ? (
          <FaStar />
        ) : value >= num ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div style={{ color: '#cc7b19' }}>
      {stars}
      <span>{text && text}</span>
    </div>
  );
}
export default Rating;
