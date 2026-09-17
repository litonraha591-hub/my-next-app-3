

import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border m-2'>
            <h2>Post title: {post.title}</h2>
            <h2>Post description: {post.body}</h2>
        </div>
    );
};

export default Post;