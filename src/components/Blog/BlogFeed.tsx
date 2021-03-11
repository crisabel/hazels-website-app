import React from 'react';
import { IPost } from './BlogComponent';
import BlogPost from './BlogPost';

interface IBlogFeed {
    posts: IPost[]
    setPosts: (posts: IPost[]) => void
}

const BlogFeed: React.FC<IBlogFeed> = ({posts, setPosts}) => {
    return (
        <div>
            <ul>
               {posts.map(post => (
                   <BlogPost
                        text={post.text}
                        post={post}
                        posts={posts}
                        setPosts={setPosts}
                    />
               ))} 
            </ul>
        </div>
    )
}

export default BlogFeed;
