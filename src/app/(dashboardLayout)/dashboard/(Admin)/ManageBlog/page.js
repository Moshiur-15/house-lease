import ManageBlogTable from '@/app/Components/Admin/ManageBlogTable';
import React from 'react';

const ManageBlog = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-center">MANAGE BLOGS</h1>
            <ManageBlogTable/>
        </div>
    );
};

export default ManageBlog;