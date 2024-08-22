import React from "react";
import Counter from "@/components/step1";
import Todo from "@/components/step2";
import API from "@/components/step3";

// カードコンポーネント
const Card = ({ title, description, children, className = "" }: { title: string, description: string, children: React.ReactNode, className?: string }) => (
    <div className={`bg-white shadow-sm rounded-lg overflow-hidden ${className}`}>
        <div className="p-3 h-full flex flex-col">
            <h2 className="text-base font-semibold text-gray-900 mb-1">{title}</h2>
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
        title: "Step 1: Counter",
        description: "シンプルなカウンター",
        component: <Counter />,
        className: "md:row-span-1 max-h-[250px]"
    },
    {
        title: "Step 2: Todo List",
        description: "基本的なTodoリスト",
        component: <Todo />,
        className: "md:row-span-2 max-h-[450px]"
    },
    {
        title: "Step 3: APIを使ってデータを取得",
        description: "APIを受信、送信に関する基本",
        component: <API />,
        className: "md:row-span-4"
    },
    {
        title: "Step 4: ルーティング",
        description: "ルーティングの基本",
        component: <div className="text-xs text-gray-500 italic">現在無効</div>,
        className: "md:row-span-1"
    },
    {
        title: "Step 5: 認証",
        description: "認証の基本",
        component: <div className="text-xs text-gray-500 italic">現在無効</div>,
        className: "md:row-span-1"
    },
    {
        title: "Step 6: SSRとSSG",
        description: "サーバーサイドレンダリングとスタティックサイトジェネレーションの基本",
        component: <div className="text-xs text-gray-500 italic">現在無効</div>,
        className: "md:row-span-1"
    },
    {
        title: "Step 7: 状態管理ライブラリ",
        description: "状態管理ライブラリの基本",
        component: <div className="text-xs text-gray-500 italic">現在無効</div>,
        className: "md:row-span-1"
    }
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    React Component Workshop
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            title={step.title}
                            description={step.description}
                            className={step.className}
                        >
                            {step.component}
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}