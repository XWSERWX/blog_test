import { create } from 'zustand';

type BlogPost = {
    id: number;
    title: string;
    content: string;
};

type Store = {
    posts: BlogPost[];
    addPost: (post: BlogPost) => void;
    setPosts: (posts: BlogPost[]) => void;
};

const useStore = create<Store>((set) => ({
    posts: [],
    addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
    setPosts: (posts) => set({ posts }),
}));

export default useStore;
