import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
};

export const fetchPostById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch post with id: ${id}`);
    }
};

export const createPost = async (post: { title: string; body: string }) => {
    try {
        const response = await axios.post(API_URL, post);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create post');
    }
};
