import { create } from 'zustand';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const POSTS_PER_PAGE = 10;

type BlogStore = {
    allPosts: Post[];
    visiblePosts: Post[];
    setAllPosts: (posts: Post[]) => void;
    loadMorePosts: () => void;
    search: string;
    setSearch: (value: string) => void;
    resetVisiblePosts: () => void;
};

export const useBlogStore = create<BlogStore>((set, get) => ({
    allPosts: [],
    visiblePosts: [],
    setAllPosts: (posts) =>
        set({
            allPosts: posts,
            visiblePosts: posts.slice(0, POSTS_PER_PAGE),
        }),
    loadMorePosts: () => {
        const { allPosts, visiblePosts } = get();
        const next = allPosts.slice(
            visiblePosts.length,
            visiblePosts.length + POSTS_PER_PAGE
        );
        set({ visiblePosts: [...visiblePosts, ...next] });
    },
    search: '',
    setSearch: (value) => set({ search: value }),
    resetVisiblePosts: () => {
        const { allPosts } = get();
        set({ visiblePosts: allPosts.slice(0, POSTS_PER_PAGE) });
    },
}));

