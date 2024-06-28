import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query: string) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                key: process.env.REACT_APP_API_KEY,
                maxResults: 40,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};