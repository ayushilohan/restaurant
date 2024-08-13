import axios from 'axios';

const BASE_URL = 'https://api.example.com/restaurants'; // Replace with actual API endpoint

export const getRestaurants = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const addRestaurant = async (restaurant) => {
    const response = await axios.post(BASE_URL, restaurant);
    return response.data;
};

export const updateRestaurant = async (id, restaurant) => {
    const response = await axios.put(`${BASE_URL}/${id}`, restaurant);
    return response.data;
};

export const deleteRestaurant = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
