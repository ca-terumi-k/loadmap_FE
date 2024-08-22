import { NextRequest, NextResponse } from "next/server";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

const posts: Post[] = [
    {
        id: 1,
        title: "新しい趣味を見つける方法",
        body: "新しい趣味を見つけることは、日々の生活に刺激を与え、ストレス解消にもなります。まずは興味のある分野を幅広く探してみましょう。そして、体験教室や無料講座を活用し、実際に体験してみることが大切です。",
        userId: 1,
    },
    {
        id: 2,
        title: "効果的な時間管理のコツ",
        body: "時間管理は現代社会を生きる上で重要なスキルです。To-Doリストの作成、優先順位付け、ポモドーロテクニックの活用など、様々な方法があります。自分に合った方法を見つけ、継続的に実践することが成功の鍵です。",
        userId: 1,
    },
    {
        id: 3,
        title: "健康的な食生活のすすめ",
        body: "健康的な食生活は、身体だけでなく心の健康にも大きな影響を与えます。バランスの取れた食事、適度な間食、十分な水分摂取を心がけましょう。また、地域の旬の食材を取り入れることで、より豊かな食生活を楽しむことができます。",
        userId: 2,
    },
    {
        id: 4,
        title: "スマートフォンの活用法",
        body: "スマートフォンは単なる通信デバイスではありません。生活を便利にする多くのアプリケーションがあります。例えば、健康管理、家計簿、学習支援など、様々な目的に活用できます。ただし、使いすぎには注意が必要です。",
        userId: 2,
    },
    {
        id: 5,
        title: "環境に優しい生活のヒント",
        body: "環境保護は私たち一人一人の小さな行動から始まります。使い捨てプラスチックの削減、エネルギー効率の良い家電の使用、公共交通機関の利用など、日常生活の中でできることがたくさんあります。地球の未来のために、今日から始めましょう。",
        userId: 3,
    },
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
