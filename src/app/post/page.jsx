
import Post from '../components/post'
import React from 'react';

const PostPage = async() => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = await res.json();

    return (
        <div>
            <h2>Post page:{posts.length}</h2>

            <div className='grid grid-cols-3'>
            {
                posts.map((post)=> <Post key={post.id} post={post}></Post>)
            }

            </div>
        </div>
    );
};

export default PostPage;