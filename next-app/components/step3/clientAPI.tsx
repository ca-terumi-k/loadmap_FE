"use client";
import React, { Suspense, use } from "react";
import { PostGrid, Post } from "@/components/step3/post";

const Loading = () => (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
);

// データフェッチを行う関数
const fetchPosts = async (): Promise<Post[]> => {
    const res = await fetch("http://localhost:3000/api/post");
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    const data: Post[] = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
};

// Promise をキャッシュするための変数
let postsPromise: Promise<Post[]> | null = null;

// データを取得するためのカスタムフック
function usePosts() {
    if (!postsPromise) {
        postsPromise = fetchPosts();
    }
    return use(postsPromise);
}

// Suspenseで使用するコンポーネント
function PostsContent() {
    const posts = usePosts();
    return <PostGrid posts={posts} />;
}

export default function PostCard() {
    return (
        <Suspense fallback={<Loading />}>
            <PostsContent />
        </Suspense>
    );
}
