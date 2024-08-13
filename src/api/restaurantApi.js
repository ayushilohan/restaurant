// src/api/restaurantApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getRestaurants = async () => {
    try {
        const response = await axios.get(`${API_URL}/restaurants`);
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        throw error;
    }
};

export const addRestaurant = async (restaurant) => {
    try {
        const response = await axios.post(`${API_URL}/restaurants`, restaurant);
        return response.data;
    } catch (error) {
        console.error('Error adding restaurant:', error);
        throw error;
    }
};

export const updateRestaurant = async (id, restaurant) => {
    try {
        const response = await axios.put(`${API_URL}/restaurants/${id}`, restaurant);
        return response.data;
    } catch (error) {
        console.error('Error updating restaurant:', error);
        throw error;
    }
};

export const deleteRestaurant = async (id) => {
    try {
        await axios.delete(`${API_URL}/restaurants/${id}`);
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        throw error;
    }
};
