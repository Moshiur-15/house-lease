import React from 'react';

const BlogId = ({params}) => {
    const {BlogId} = params;
    console.log(BlogId)
    return (
        <div className='text-center'>
            Id:{BlogId}
        </div>
    );
};

export default BlogId;