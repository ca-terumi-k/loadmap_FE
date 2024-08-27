import { NextResponse } from "next/server";

export async function GET() {
    // ダミーデータを生成
    const posts = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        title: `Post ${i + 1}`,
        body: `This is post ${i + 1}`,
        author: `Author ${i + 1}`,
    }));

    // 実際のAPIからデータを取得する場合は、ここでfetchを使用します
    // const response = await fetch('https://api.example.com/posts');
    // const posts = await response.json();

    return NextResponse.json(posts);
}
