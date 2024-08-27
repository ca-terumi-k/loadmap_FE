import React from "react";

type CardProps = {
    text: string;
};
export default function Card({ text }: CardProps) {
    return (
        <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200 my-2">
            <div className="flex items-center justify-between">
                <div className="flex-grow text-gray-700 cursor-move">
                    {text}
                </div>
                <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
