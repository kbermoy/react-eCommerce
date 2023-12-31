import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
    function getRatings(rating) {
        let rates = []
        for(let i = 0; i < Math.floor(rating); i++) {
            rates.push(<FontAwesomeIcon icon='star' key={i} />)
        }
        if(rating % 1 !== 0) {
            rates.push(<FontAwesomeIcon icon='star-half-alt' key={rating} />)
        }
        return rates
    }

  return (
    <div className="book__ratings">{getRatings(rating)}</div>
  );
};

export default Rating
