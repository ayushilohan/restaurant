import React from 'react';

const RestaurantItem = ({ restaurant, onEdit, onDelete }) => {
    return (
        <li>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <p>{restaurant.location}</p>
            <button onClick={() => onEdit(restaurant)}>Edit</button>
            <button onClick={() => onDelete(restaurant.id)}>Delete</button>
        </li>
    );
};

export default RestaurantItem;
