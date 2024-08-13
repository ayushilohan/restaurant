// src/components/RestaurantForm.js
import React, { useState, useEffect } from 'react';
import { addRestaurant, updateRestaurant } from '../api/restaurantApi';
import { useNavigate } from 'react-router-dom';
import './RestaurantForm.css'; // Import the CSS file

const RestaurantForm = ({ restaurant, onSave }) => {
    const [name, setName] = useState(restaurant ? restaurant.name : '');
    const [description, setDescription] = useState(restaurant ? restaurant.description : '');
    const [location, setLocation] = useState(restaurant ? restaurant.location : '');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (restaurant) {
            setName(restaurant.name);
            setDescription(restaurant.description);
            setLocation(restaurant.location);
        }
    }, [restaurant]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRestaurant = { name, description, location };
        setLoading(true);
        try {
            if (restaurant) {
                await updateRestaurant(restaurant.id, newRestaurant);
            } else {
                await addRestaurant(newRestaurant);
            }
            onSave();
            navigate('/');
        } catch (error) {
            setError('Failed to save restaurant. Please try again later.');
            console.error('Failed to save restaurant:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
};

export default RestaurantForm;
