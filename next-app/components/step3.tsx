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

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

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
        </div>
    );
}

function PostGrid({ posts }: { posts: Post[] }) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

function PostCard({ post }: { post: Post }) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                        {post.title}
                    </h2>
                    <p className={`text-gray-600 mb-4 line-clamp-3`}>
                        {post.body}
                    </p>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                    <span className="text-sm text-gray-500">
                        User ID: {post.userId}
                    </span>
                </div>
            </div>
        </>
    );
}
