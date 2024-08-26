import React from "react";
import Card from "@/components/step2/card";

type ListProps = {
    cards: string[];
};

export default function List({ cards }: ListProps) {
    return (
        <div className="bg-gray-100 py-8 w-full">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Todo List
                </h1>
                <div className="bg-white rounded-lg overflow-hidden">
                    {cards.map((card: string, index: number) => (
                        <Card key={index} text={card} />
                    ))}
                </div>
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200">
                    Add New Task
                </button>
            </div>
        </div>
    );
}
