import { User } from "./user.model";

export interface Post {
    _id: string,
    text: string;
    createdAt: Date;
    author: User;
}