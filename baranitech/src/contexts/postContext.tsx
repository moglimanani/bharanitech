import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Post, PostContextType, Posts } from "../types/post";

const PostsContext = createContext<PostContextType | undefined>(undefined)

export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Posts>([])

    const addPost = (post: Post) => {
        setPosts((prevPost) => [...prevPost, post])
    }

    const contextValue = useMemo(()=> ({ posts, addPost }), [posts, addPost])
    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePostsContext = () => {
    const context = useContext(PostsContext)
    if (!context) throw new Error('usePostContext must be within the provider')
    return context
}