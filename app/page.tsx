import React from "react";
import Counter from "@/components/step1";
import Todo from "@/components/step2";
import API from "@/components/step3";
import Navigation from "@/components/step4";
import Auth from "@/components/step5";
import SSR_SSG_CSR from "@/components/step6";
import Context from "@/components/step7";
import Toast from "@/components/toast";

// カードコンポーネント
const Card = ({
    title,
    description,
    children,
    className = "",
}: {
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`bg-white shadow-sm rounded-lg overflow-hidden ${className}`}
    >
        <div className="p-3 h-full flex flex-col">
            <h2 className="text-base font-semibold text-gray-900 mb-1">
                {title}
            </h2>
            <p className="text-xs text-gray-600 mb-2">{description}</p>
            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                {children}
            </div>
        </div>
    </div>
);

// ステップデータ
const steps = [
    {
        key: "group1",
        items: [
            {
                title: "Step 1: Counter",
                description: "シンプルなカウンター",
                component: <Counter />,
                className: "md:row-span-1",
            },
            {
                title: "Step 2: Todo List",
                description: "見かけだけのTodoリスト",
                component: <Todo />,
                className: "md:row-span-2",
            },
            {
                title: "Step 7: 状態管理ライブラリ",
                description: "状態管理ライブラリの基本",
                component: <Context />,
                className: "md:row-span-1",
            },
        ],
    },
    {
        key: "group2",
        items: [
            {
                title: "Step 4: ルーティング",
                description: "ルーティングの基本",
                component: <Navigation />,
                className: "md:row-span-1 ms:row-span-1",
            },

            {
                title: "Step 3: APIを使ってデータを取得",
                description: "APIを受信、送信に関する基本",
                component: <API />,
                className: "md:row-span-2",
            },
        ],
    },
    {
        key: "group3",
        items: [
            {
                title: "Step 5: 認証",
                description: "認証の基本",
                component: <Auth />,
                className: "md:row-span-1",
            },
            {
                title: "Step 6: SSRとSSG",
                description:
                    "サーバーサイドレンダリングとスタティックサイトジェネレーションの基本",
                component: <SSR_SSG_CSR />,
                className: "md:row-span-1",
            },
        ],
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    React Component Workshop
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-4">
                    {steps.map((group) => (
                        <div key={group.key} className="flex flex-col gap-4">
                            {group.items.map((step, index) => (
                                <div
                                    key={index}
                                    className={`${step.className}`}
                                >
                                    <Card
                                        title={step.title}
                                        description={step.description}
                                        className="w-full h-full"
                                    >
                                        {step.component}
                                    </Card>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Toast />
        </div>
    );
}