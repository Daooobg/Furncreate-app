import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import classes from './Stars.module.css'

const Stars = ({ stars, comments }) => {
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
    <div className={!comments ? '' : `${classes.container}`}>
      <div className={!comments ? `${classes.stars}` : `${classes["stars-main"]}`} >{tempStars}</div>
      {comments && <p className="comments">({comments} customer comments)</p>}
    </div>
  );
};

export default Stars;
