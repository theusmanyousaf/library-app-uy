import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = process.env.REACT_APP_BOOKS_API_KEY;

if (!API_KEY) {
    throw new Error('API key is missing in environment variables');
}

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