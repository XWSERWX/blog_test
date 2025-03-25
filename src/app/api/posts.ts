import axios from 'axios';
import { Post } from '../store/blogStore';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch posts. ${error}`);
    }
};

export const fetchPostById = async (id: number): Promise<Post> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch post with id: ${id}. ${error}`);
    }
};

export const createPost = async (post: { title: string; body: string }): Promise<Post> => {
    try {
        const response = await axios.post(API_URL, post);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create post. ${error}`);
    }
};