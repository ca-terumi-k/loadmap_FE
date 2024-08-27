"use client";
import React, { Suspense, useState, useEffect } from "react";
import { PostGrid, Post } from "@/app/components/step3/post";

const Loading = () => (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
);

// データフェッチを行う関数
const fetchPosts = async (): Promise<Post[]> => {
    const res = await fetch(`/api/post`, { method: "GET" });
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    const data: Post[] = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
};

// Suspenseで使用するコンポーネント
function PostsContent() {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPosts()
            .then((data) => setPosts(data))
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!posts) {
        return <Loading />;
    }

    return <PostGrid posts={posts} />;
}

export default function PostCard() {
    return (
        <Suspense fallback={<Loading />}>
            <PostsContent />
        </Suspense>
    );
}

