import React from "react";
import Counter from "@/components/step1";

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
// ステップデータ
const steps = [
    {
        key: "group1",
        items: [
            {
                title: "Step1",
                description: "Counter",
                component: <Counter />,
                className: "h-80",
            },
        ],
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    TEST2
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
    );
}