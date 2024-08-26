"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    RootState,
    setName,
    setEmail,
    resetForm,
    outForm,
} from "@/app/stateStore";

const Context = () => {
    const dispatch = useDispatch();
    const name = useSelector((state: RootState) => state.form.name);
    const email = useSelector((state: RootState) => state.form.email);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value));
        dispatch(outForm());
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.target.value));
        dispatch(outForm());
    };

    const handleReset = () => {
        dispatch(resetForm());
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Form Example</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleReset}
                    className="w-full bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700"
                >
                    Reset
                </button>
            </form>
        </div>
    );
};

export default Context;
