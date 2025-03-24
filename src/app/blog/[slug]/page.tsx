// pages/blog/[slug]/page.tsx

"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchPostById } from '../../api/posts';
import Head from 'next/head'; // Импортируем компонент Head для SEO

const PostPage = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { slug } = useParams();

    useEffect(() => {
        if (!slug) return;

        const loadPost = async () => {
            try {
                setLoading(true);
                setError(null);

                const postData = await fetchPostById(slug);
                setPost(postData);
            } catch (error) {
                setError('Ошибка при загрузке поста. Попробуйте позже.');
                console.error('Error fetching post:', error);
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
        <div className="min-h-screen p-4">
            <Head>
                <title>{post.title} - My Blog</title>
                <meta name="description" content={post.body.substring(0, 150)} />
                <meta name="keywords" content="blog, post, next.js, react" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.body.substring(0, 150)} />
                <meta property="og:image" content="https://via.placeholder.com/500" />
            </Head>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg">{post.body}</p>
        </div>
    );
};

export default PostPage;
