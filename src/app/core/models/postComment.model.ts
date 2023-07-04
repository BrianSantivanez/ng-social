import { Post } from "./post.model";
import { User } from "./user.model";

export interface PostComment {
    _id: string,
    text: string,
    author: User,
    post: Post,
    createdAt: string,
    updatedAt: string,
}
