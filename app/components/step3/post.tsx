export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export function PostGrid({ posts }: { posts: Post[] }) {
    // returnを遅延させたい fallbackの時間を設定する

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

export function PostCard({ post }: { post: Post }) {
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
