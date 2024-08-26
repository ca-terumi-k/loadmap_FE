import { NextRequest, NextResponse } from "next/server";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

// .nextのフォルダーを消さないとdevモードでsampleデータの更新ができない
const posts: Post[] = [
    {
        id: 1,
        title: "POST1",
        body: "新しい趣味を見つけることは、日々の生活に刺激を与え、ストレス解消にもなります。まずは興味のある分野を幅広く探してみましょう。そして、体験教室や無料講座を活用し、実際に体験してみることが大切です。",
        userId: 1,
    },
    {
        id: 2,
        title: "POST2",
        body: "時間管理は現代社会を生きる上で重要なスキルです。To-Doリストの作成、優先順位付け、ポモドーロテクニックの活用など、様々な方法があります。自分に合った方法を見つけ、継続的に実践することが成功の鍵です。",
        userId: 1,
    },
    {
        id: 3,
        title: "POST3",
        body: "健康的な食生活は、身体だけでなく心の健康にも大きな影響を与えます。バランスの取れた食事、適度な間食、十分な水分摂取を心がけましょう。また、地域の旬の食材を取り入れることで、より豊かな食生活を楽しむことができます。",
        userId: 2,
    },
    // {
    //     id: 4,
    //     title: "POST4",
    //     body: "時間管理は現代社会を生きる上で重要なスキルです。To-Doリストの作成、優先順位付け、ポモドーロテクニックの活用など、様々な方法があります。自分に合った方法を見つけ、継続的に実践することが成功の鍵です。",
    //     userId: 4,
    // },
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const post = posts.find((p) => p.id === parseInt(id));
        if (post) {
            return NextResponse.json(post, { status: 200 });
        } else {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }
    }

    return NextResponse.json(posts, { status: 200 });
}
