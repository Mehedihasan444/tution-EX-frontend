import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const User_Rating = () => {
    const [rating, setRating] = useState(3.25) // Initial value

    return <Rating style={{ maxWidth: 70 }} value={rating} onChange={setRating} readOnly />
};

export default User_Rating;