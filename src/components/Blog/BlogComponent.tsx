import React, { useState } from 'react';
import BlogForm from './BlogForm';
import BlogFeed from './BlogFeed';

export interface IPost {
    text: string,
    id: number
}

const BlogComponent: React.FC = () => {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState<IPost[]>([]);

    return (
        <div>
            <BlogForm input={input} posts={posts} setInput={setInput} setPosts={setPosts} />
            <BlogFeed posts={posts} setPosts={setPosts} />
        </div>
    )
}

export default BlogComponent;
