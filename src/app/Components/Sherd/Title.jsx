import React from 'react';

const Title = ({h2, p}) => {
    return (
        <div className="text-center mb-8">
        <h2 className="text-gray-600  flex justify-center items-center gap-1"><div className="h-2.5 w-2.5 rounded-full bg-[#EA703B]"></div>{h2}</h2>
        <p className="text-2xl font-semibold text-gray-800">{p}</p>
      </div>
    );
};

export default Title;