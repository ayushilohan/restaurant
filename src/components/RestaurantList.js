// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import { getRestaurants, deleteRestaurant } from '../api/restaurantApi';
import RestaurantItem from './RestaurantItem';
import './RestaurantList.css'; // Import the CSS file

const RestaurantList = ({ onEdit }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setLoading(true);
            try {
                const data = await getRestaurants();
                setRestaurants(data);
            } catch (error) {
                setError('Failed to fetch restaurants. Please try again later.');
                console.error('Failed to fetch restaurants:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteRestaurant(id);
            setRestaurants(restaurants.filter((r) => r.id !== id));
        } catch (error) {
            setError('Failed to delete restaurant. Please try again later.');
            console.error('Failed to delete restaurant:', error);
        }
    };

    return (
        <div>
            <h2>Restaurants</h2>
            {loading ? <p>Loading...</p> : error ? <p className="error">{error}</p> : (
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id} className="restaurant-item">
                            <div>
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.description}</p>
                                <p>{restaurant.location}</p>
                            </div>
                            <div>
                                <button onClick={() => onEdit(restaurant)}>Edit</button>
                                <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RestaurantList;
