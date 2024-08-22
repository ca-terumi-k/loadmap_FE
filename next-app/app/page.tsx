import React from "react";
import Counter from "@/components/step1";
import Todo from "@/components/step2";
import API from "@/components/step3";
// import Routing from "@/components/step4";
// import Auth from "@/components/step5";
// import { SSR, SSG } from "@/components/step6";
// import State from "@/components/step7";
// import KanbanBoard from "@/components/board";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    React Component Workshop
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
                    {/* Step 1: Counter */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-1">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 1: Counter
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                シンプルなカウンター
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                                <Counter />
                            </div>
                        </div>
                    </div>
                    {/* Step 2: Todo List */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-2">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 2: Todo List
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                基本的なTodoリスト
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow overflow-auto">
                                <Todo />
                            </div>
                        </div>
                    </div>
                    {/* Step 3: API */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-4">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 3: APIを使ってデータを取得
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                APIを受信、送信に関する基本
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                                <div className="text-xs text-gray-500 italic">
                                    <API />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* step 4: Routing */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-1">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 4: ルーティング
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                ルーティングの基本
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                                <div className="text-xs text-gray-500 italic">
                                    現在無効
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* step 5:  認証 */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-1">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 5: 認証
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                認証の基本
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                                <div className="text-xs text-gray-500 italic">
                                    現在無効
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* step 6: サーバーサイドレンダリング（SSR）とスタティックサイトジェネレーション（SSG） */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-1">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 6: SSRとSSG
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                サーバーサイドレンダリングとスタティックサイトジェネレーションの基本
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                                <div className="text-xs text-gray-500 italic">
                                    現在無効
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* step 7: 状態管理ライブラリ */}
                    <div className="bg-white shadow-sm rounded-lg overflow-hidden md:row-span-1">
                        <div className="p-3 h-full flex flex-col">
                            <h2 className="text-base font-semibold text-gray-900 mb-1">
                                Step 7: 状態管理ライブラリ
                            </h2>
                            <p className="text-xs text-gray-600 mb-2">
                                状態管理ライブラリの基本
                            </p>
                            <div className="bg-gray-50 p-2 rounded flex-grow flex items-center justify-center">
                                <div className="text-xs text-gray-500 italic">
                                    現在無効
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
