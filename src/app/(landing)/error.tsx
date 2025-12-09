"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                We're sorry, but it seems like we've hit a snag. Please try again.
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                Try again
            </button>
        </div>
    );
}
