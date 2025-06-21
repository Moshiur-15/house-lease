import React from 'react';

const Title = ({h2, p}) => {
    return (
        <div className="text-center mb-8">
        <h2 className="text-gray-600  flex justify-center items-center gap-1 dark:text-gray-300"><div className="h-2.5 w-2.5 rounded-full bg-[#EA703B]"></div>{h2}</h2>
        <p className="md:text-2xl font-semibold text-gray-800 dark:text-white text-xl mx-2 sm:mx-0">{p}</p>
      </div>
    );
};

export default Title;