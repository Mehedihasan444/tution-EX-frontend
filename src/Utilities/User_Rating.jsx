import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import PropTypes from 'prop-types';

const User_Rating = ({value}) => {
    const [rating, setRating] = useState(value) // Initial value

    return <Rating style={{ maxWidth: 70 }} value={rating} onChange={setRating} readOnly />
};

export default User_Rating;

User_Rating.propTypes = {
    value: PropTypes.number.isRequired,
};
