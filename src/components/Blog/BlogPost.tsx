import React from 'react';
import { IPost } from './BlogComponent';

interface IBlogPost {
    text: string;
    post: IPost,
    posts: IPost[],
    setPosts: (posts: IPost[]) => void
}


const BlogPost: React.FC<IBlogPost> = ({text, post, posts, setPosts}) => {
    
    const deleteHandler: React.MouseEventHandler<HTMLElement> = (el) => {
        setPosts(posts.filter(el => el.id !== post.id));
    }

    return (
        <div>
            <li>{text}</li>
            <button>
                edit
            </button>
            <button>
                <span>
                    <i onClick={deleteHandler} className="fas fa-trash"></i>
                </span>
            </button>
        </div>
    )
}

export default BlogPost;
