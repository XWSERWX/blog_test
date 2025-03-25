"use client";
import { useEffect, useRef } from "react";
import { Post, useBlogStore } from "../store/blogStore";
import { SearchBar } from "./SearchBar";
import { BlogList } from "./BlogList";

type HomeContentProps = {
    initialPosts: Post[];
};

export const HomeContent = ({ initialPosts }: HomeContentProps) => {
    const {
        setAllPosts,
        visiblePosts,
        loadMorePosts,
        search,
        resetVisiblePosts,
    } = useBlogStore();
    const loaderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setAllPosts(initialPosts);
    }, [initialPosts, setAllPosts]);

    useEffect(() => {
        resetVisiblePosts();
    }, [search, resetVisiblePosts]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMorePosts();
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [loadMorePosts]);

    const filteredPosts = visiblePosts.filter(
        (post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="py-8 md:py-12">
            <SearchBar />
            <BlogList posts={filteredPosts} />
        </section>

    );
};
