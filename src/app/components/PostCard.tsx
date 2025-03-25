"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "../store/blogStore";

type PostCardProps = {
    post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-5 rounded-2xl shadow-card border bg-card hover:shadow-xl transition-colors duration-300"
        >
            <h2 className="text-2xl font-bold mb-3 text-foreground">{post.title}</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                {post.body.slice(0, 100)}...
            </p>
            <Link
                href={`/blog/${post.id}`}
                className="text-primary hover:underline font-semibold"
            >
                Читать далее →
            </Link>
        </motion.div>
    );
};
