import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.API_KEY;

export const fetchBooks = async (query: string) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                key: API_KEY,
                maxResults: 40,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};