"use client";

import React, { useState, useEffect } from "react";
import { FaGoogle, FaUserCircle } from "react-icons/fa";
import {
    auth,
    provider,
    signInWithPopup,
    signOut,
} from "@/app/components/step5/firebase";
import Image from "next/image";
import { User } from "firebase/auth";

export default function Auth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div className="">
            <div className="p-8 bg-white rounded-lg shadow-md">
                {isLoggedIn && user ? (
                    <div className="flex flex-col items-center">
                        <p className="mb-4">こんにちは、{user.displayName}</p>
                        <div className="flex flex-row items-center space-x-4">
                            {/* ログインしたユーザーのアイコンを表示 */}
                            {user.photoURL ? (
                                <Image
                                    src={user.photoURL}
                                    alt="ユーザーアイコン"
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                            ) : (
                                <FaUserCircle
                                    size={24}
                                    className="text-blue-500"
                                />
                            )}
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                            >
                                ログアウト
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row items-center space-x-4">
                        <p className="">
                            こんにちは、
                            <br />
                            ログインしてね
                        </p>
                        <div className="flex flex-row items-center space-x-4 border-2 border-blue-500 rounded-md p-2">
                            <FaGoogle size={24} className="text-blue-500" />
                            <button
                                onClick={handleLogin}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                            >
                                ログイン
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
