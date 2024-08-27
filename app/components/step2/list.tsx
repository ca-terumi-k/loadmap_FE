"use client";
import React, { useState } from "react";
import Card from "@/app/components/step2/card";

type ListProps = {
    initialCards?: string[]; // initialCardsをオプショナルにする
};

export default function List({
    initialCards = ["task1", "task2", "task3"],
}: ListProps) {
    const [cards, setCards] = useState(initialCards);

    const addCard = () => {
        const newCard = "New Task"; // 新しいタスクのデフォルト文字列
        setCards([...cards, newCard]);
    };

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
                <button
                    onClick={addCard}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
                >
                    Add New Task
                </button>
            </div>
        </div>
    );
}
