import SSR from "@/app/components/step6/SSR";
import SSG from "@/app/components/step6/SSG";
import CSR from "@/app/components/step6/CSR";

import React from "react";

const SSR_SSG_CSR = async () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
                レンダリング方式の比較
            </h1>
            <div className="flex flex-col space-y-6">
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-4">SSG</h2>
                    <div className="text-sm text-gray-500 mb-2">
                        ビルド時に静的に生成
                    </div>
                    <SSG />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-4">SSR</h2>
                    <div className="text-sm text-gray-500 mb-2">
                        リアルタイムのデータ取得
                    </div>
                    <SSR />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-4">CSR</h2>
                    <div className="text-sm text-gray-500 mb-2">
                        クライアント側でデータ取得
                    </div>
                    <CSR />
                </div>
            </div>
        </div>
    );
};

export default SSR_SSG_CSR;
