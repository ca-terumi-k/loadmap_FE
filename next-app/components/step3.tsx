// Step 3: APIとの連携
// やりたいこと
//  - 外部APIからデータを取得
//  - useEffectフックの使用
//  - ローディング状態の管理(skeleton loader)
// https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming

// https://jsonplaceholder.typicode.com/posts
// このAPIを使って、データを取得して表示するコンポーネントを作成してください。

// このAPIは、以下のようなデータを返します。
// {
//   id: 1,
//   title: '...',
//   body: '...',
//   userId: 1
// }

// [
//   { id: 1, title: '...' /* ... */ },
//   { id: 2, title: '...' /* ... */ },
//   { id: 3, title: '...' /* ... */ },
//   /* ... */
//   { id: 100, title: '...' /* ... */ },
// ];

import React, { Suspense } from "react";
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
        <div className="container mx-auto px-4 py-8">
            <PostGrid posts={data} />
            <hr className="my-4" />
            <PostCard />
        </div>
    );
}