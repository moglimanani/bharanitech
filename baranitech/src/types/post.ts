export type Post = {
    id: string;
    title: string;
    description: string
}
export type Posts = Post[]

export type PostContextType = {
    posts: Posts,
    addPost: (post:Post)=>void
}