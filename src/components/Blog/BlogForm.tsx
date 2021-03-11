import React from 'react';
import { IPost } from './BlogComponent';

interface IBlogForm {
    input: string,
    setInput: (text: string) => void,
    posts: IPost[],
    setPosts: (posts: IPost[]) => void
}

const BlogForm: React.FC<IBlogForm> = ({ input, setInput, posts, setPosts }) => {

    const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setPosts([
            ...posts, { text: input, id: Math.random() * 10000 },
        ]);
        setInput("");
    }

    return (
        <form className="bloginput">
            <textarea
                rows={4}
                onChange={inputHandler}
            >
            </textarea>
            <button onClick={submitHandler} type="submit">
                Post
            </button>
        </form>
    )
}

export default BlogForm;
