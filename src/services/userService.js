// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
