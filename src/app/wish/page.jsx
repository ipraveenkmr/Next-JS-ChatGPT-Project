// pages/newyear.js
"use client";
import React from 'react';
import wishStore from '../components/appstore';

const NewYearPage = () => {
    const { formdata } = wishStore();

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gradient-to-b from-purple-600 to-pink-600">
                <div>
                    <h1 className="text-5xl font-bold text-white">Happy New Year 2024!</h1>
                    <h2 className="text-3xl font-bold text-white">By {formdata.name}</h2>
                    <h2 className="text-3xl font-bold text-white mt-3">By {formdata.message}</h2>
                    <div className="flex items-center justify-center flex-wrap">
                        <img
                            src={formdata.image}
                            alt={`Image`}
                            className="cursor-pointer m-1 border border-red-800 max-w-64"

                        />
                    </div>
                </div>
            </div>

        </>

    );
};

export default NewYearPage;