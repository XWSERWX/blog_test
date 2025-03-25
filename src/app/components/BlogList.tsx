"use client";

import { Post } from "../store/blogStore";
import { PostCard } from "./PostCard";

type BlogListProps = {
    posts: Post[];
};

export const BlogList = ({ posts }: BlogListProps) => {
    if (posts.length === 0) {
        return <p className="text-center text-gray-500 mt-6">Нет постов по вашему запросу.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
