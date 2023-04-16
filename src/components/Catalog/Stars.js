import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import classes from './Stars.module.css'

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className={!reviews ? '' : `${classes.container}`}>
      <div className={!reviews ? `${classes.stars}` : `${classes["stars-main"]}`} >{tempStars}</div>
      {reviews && <p>({reviews} customer reviews)</p>}
    </div>
  );
};

export default Stars;
