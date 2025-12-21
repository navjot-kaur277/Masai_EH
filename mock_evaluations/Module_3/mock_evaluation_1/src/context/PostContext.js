import React,{
    createContext, userState , useEffect, 
    Children} from "react";

export const PostContext = 
        createContext();
        
export const PostProvider = 
({Children}) => {
    const [posts , setPosts] =
    userState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data =>
      setPosts(data.slice(0,20)));
    }, []);

    const deletePost = (id )=> setPosts(posts.filter(p=>p.id !==id));

    const updatePost = (id, updatedData) => {
        setPosts(posts.map(p=>p.id === id? {
            ...p, ...updatedData } :p ));
    };

    return (
        <PostContext.Provider value={{posts,deletePost,updatePost}}>
            {Children}
        </PostContext.Provider>
    );
};        