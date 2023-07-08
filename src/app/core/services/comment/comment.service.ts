import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostComment } from '../../models/postComment.model';
import { Observable } from 'rxjs';
import { UserStateService } from '../state/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient,
    private userState: UserStateService
  ) { }

  getAllComments(): Observable<PostComment[]> {
    return this.http.get<PostComment[]>("http://localhost:3000/comment");
  }
  

  saveComment(text: string | null | undefined, postId:string | null): Observable<Comment> | undefined {
    let authorId = ""
    this.userState.userId$?.subscribe((userId) =>
      authorId = userId
    );
    return this.http.post<Comment>(
      'http://localhost:3000/comment', 
      {
        text,
        author: authorId,
        post: postId,
      }
    )
  }
}
