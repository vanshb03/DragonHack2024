"use client"

import React, { useState, useEffect } from 'react';
import { Landing } from '@/components/component/landing';

const Page = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a delay to show the loading animation
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2000 milliseconds (2 seconds) delay

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <Landing />
            )}
        </div>
    );
};

export default Page;
