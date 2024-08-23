// Step 3: APIとの連携
// やりたいこと
//  - 外部APIからデータを取得
//  - useEffectフックの使用
//  - ローディング状態の管理(skeleton loader)

// app/api/post/route.tsを生成し、そこにデータを取得するAPIを作成してください。


import React from "react";
import { PostGrid, Post } from "@/components/step3/post";
import PostCard from "@/components/step3/clientAPI";

export default async function API() {
    const getFunc = async () => {
        "use server";
        let data: Post[] = [];
        const response = await fetch("http://localhost:3000/api/post");
        data = await response.json();
        // dataから5つのデータを取得
        const slicedData = data.slice(0, 5);
        return slicedData;
    };

    const data = await getFunc();

    return (
        <>
            <div className="mx-auto px-4 py-8">
                <h2>SSR</h2>
                <PostGrid posts={data} />
                <hr className="my-4" />
                <h2>CSR</h2>
                <div className="min-h-[200px]">
                    <PostCard />
                </div>
            </div>
        </>
    );
}