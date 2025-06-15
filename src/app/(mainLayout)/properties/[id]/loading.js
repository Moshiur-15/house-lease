import React from 'react';

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="flex space-x-1 text-2xl font-bold text-indigo-600">
                <span className="animate-bounce [animation-delay:0s]">L</span>
                <span className="animate-bounce [animation-delay:0.1s]">o</span>
                <span className="animate-bounce [animation-delay:0.2s]">a</span>
                <span className="animate-bounce [animation-delay:0.3s]">d</span>
                <span className="animate-bounce [animation-delay:0.4s]">i</span>
                <span className="animate-bounce [animation-delay:0.5s]">n</span>
                <span className="animate-bounce [animation-delay:0.6s]">g</span>
                <span className="animate-bounce [animation-delay:0.7s]">.</span>
                <span className="animate-bounce [animation-delay:0.7s]">.</span>
            </div>
        </div>
    );
};

export default loading;
