import React,{
    createContext, useState , useEffect,}
     from "react";

export const PostContext = 
        createContext();
        
export const PostProvider = 
({Children}) => {
    const [posts , setPosts] =
    useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data =>
      setPosts(data.slice(0,20)));
    }, []);

    const deletePost = (id )=> setPosts(posts.filter(post => post.id !== id));

    const updatePost = (id, newTitle) => {
        setPosts(posts.map(posts =>post.id === id? {
            ...post, title: newTitle } :post ));
    };

    return (
        <PostContext.Provider value={{posts,deletePost,updatePost}}>
            {Children}
        </PostContext.Provider>
    );
};        