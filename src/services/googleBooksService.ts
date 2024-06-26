import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBsxIthqH43jxXNjspuwNIIdBpkcOxq2mg';

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