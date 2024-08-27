"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setUseCookies } from "@/app/stateStore";

const Toast = () => {
    const [showToast, setShowToast] = useState(false);
    const useCookies = useSelector((state: RootState) => state.form.useCookies);
    const dispatch = useDispatch();

    useEffect(() => {
        // ページロード時に初期値がfalseの場合にトーストを表示
        if (!useCookies) {
            setShowToast(true);
        }
    }, [useCookies]);

    const handleAccept = () => {
        dispatch(setUseCookies(true));
        setShowToast(false);
    };

    const handleDecline = () => {
        setShowToast(false);
    };

    return (
        <>
            {showToast && (
                <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
                    <p>
                        当サイトではクッキーを使用してエクスペリエンスを向上させています。承諾いただけますか?
                        <br />
                        有効化していただくとリロードしてもFormの値が保持されます。
                    </p>
                    <button
                        onClick={handleAccept}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Accept
                    </button>
                    <button
                        onClick={handleDecline}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Decline
                    </button>
                </div>
            )}
        </>
    );
};

export default Toast;
