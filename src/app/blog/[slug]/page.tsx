"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPostById } from "../../api/posts";
import Head from "next/head";
import { Post } from "@/app/store/blogStore";
import { motion } from "framer-motion";

const PostPage = () => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { slug } = useParams();

    useEffect(() => {
        if (!slug) return;

        const loadPost = async () => {
            try {
                setLoading(true);
                setError(null);

                const postData = await fetchPostById(Number(slug));
                setPost(postData);
            } catch (error) {
                setError("Ошибка при загрузке поста. Попробуйте позже.");
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    if (loading) {
        return <div className="text-center text-lg text-gray-500">Загрузка...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-500">{error}</div>;
    }

    if (!post) {
        return <div className="text-center text-lg text-gray-500">Пост не найден</div>;
    }

    return (
        <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto">
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.body.substring(0, 150)} />
                <meta name="keywords" content="blog, post, next.js, react" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.body.substring(0, 150)} />
                <meta property="og:image" content="https://via.placeholder.com/500" />
            </Head>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-center text-foreground">
                    {post.title}
                </h1>
                <div className="flex justify-center mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <p>Автор: Пользователь #{post.userId} | ID поста: {post.id}</p>
                </div>
                <article className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
                    <p>{post.body}</p>
                </article>
            </motion.div>
        </div>
    );
};

export default PostPage;
