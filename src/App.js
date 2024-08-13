import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantForm from './components/RestaurantForm';
import './styles/App.css';

const App = () => {
    const [editingRestaurant, setEditingRestaurant] = useState(null);

    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link> | <Link to="/add">Add Restaurant</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<RestaurantList onEdit={setEditingRestaurant} />} />
                    <Route path="/add" element={<RestaurantForm onSave={() => setEditingRestaurant(null)} />} />
                    <Route path="/edit" element={editingRestaurant ? <RestaurantForm restaurant={editingRestaurant} onSave={() => setEditingRestaurant(null)} /> : <div>Select a restaurant to edit</div>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
